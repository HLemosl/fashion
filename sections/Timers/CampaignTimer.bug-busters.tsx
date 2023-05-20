export interface Props {
  end_date: {
    day: number;
    month: number;
    year: number;
  };
  text: string;
  link: string;
  button: string;
}

export default function CampaignTimer({ end_date, text, link, button }: Props) {
  return (
    <div class="bg-timer flex justify-center space-x-10 px-14 py-5 items-center">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col text-secundary">
          <span className="countdown font-mono text-xl">
            <span style={{ "--value": end_date.day }}></span>
          </span>
          hours
        </div>
        <p class="text-secundary">:</p>
        <div className="flex flex-col text-secundary">
          <span className="countdown font-mono text-xl">
            <span style={{ "--value": end_date.month }}></span>
          </span>
          min
        </div>
        <p class="text-secundary">:</p>
        <div className="flex flex-col text-secundary">
          <span className="countdown font-mono text-xl">
            <span style={{ "--value": end_date.year }}></span>
          </span>
          sec
        </div>
      </div>
      <p class="text-secundary">{text}</p>
      <a href={link} type="button" class="btn">Button</a>
    </div>
  );
}
