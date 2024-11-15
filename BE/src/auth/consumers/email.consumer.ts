import { MailerService } from "@nestjs-modules/mailer";
import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";


@Processor('send-mail')
export class EmailConsumer {
  constructor(
    private mailerService: MailerService,
  ) { }
  @Process('register')
  async registerEmail(job: Job<unknown>) {
    console.log(job.data);

    await this.mailerService.sendMail({
      to: job.data['email'],
      subject: 'Testing nest mailermodule',
      text: 'Welcome',
      template: 'register',
      context: {
        name: job.data['name'],
        activationCode: job.data['codeId']
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
}
