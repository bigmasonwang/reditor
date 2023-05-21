const Default = ({ title, content }) => (
  <div className="flex h-full flex-col justify-center bg-orange-100 p-6">
    <div>
      <div className="text-center text-4xl">{title}</div>
      <div className="mt-3 text-center text-xl">{content}</div>
    </div>
  </div>
);

export default Default;
