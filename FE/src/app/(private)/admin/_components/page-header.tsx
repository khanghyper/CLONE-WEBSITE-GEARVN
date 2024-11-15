
const PageHeader = ({ headerTitle }: { headerTitle: string }) => {
  return (
    <div className={'mb-4 py-4 px-6 text-[17px] text-gray-600 font-bold uppercase '}>
      {headerTitle}
    </div>
  );
};

export default PageHeader;