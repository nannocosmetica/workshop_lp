interface IProps {
  icon: React.ReactNode;
  name: string;
  text: string;
}

const Card = ({ icon, name, text }: IProps) => {
  return (
    <div className="flex flex-col min-h-96 overflow-hidden rounded-lg bg-neutral-800 text-white w-full lg:max-w-3/12 lg:min-w-105">
      <div className="flex flex-1 flex-col px-8">
        <div className="flex min-h-34 w-full items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-r from-orange-400 via-pink-500 to-purple-600">
            {icon}
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <span className="text-sm font-light uppercase tracking-[6px]">
            {name}
          </span>

          <p className="mt-8 text-justify">
            {text}
          </p>
        </div>
      </div>

      <div className="h-2 w-full bg-linear-to-r from-orange-400 via-pink-500 to-purple-600" />
    </div>
  );
};

export default Card;