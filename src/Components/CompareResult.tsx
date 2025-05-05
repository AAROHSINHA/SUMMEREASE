import { FC } from "react";

interface propType {
  data: string | undefined;
  currentBookName: string | undefined;
}

const CompareResult: FC<propType> = ({ data, currentBookName }) => {
  return (
    <div className="bg-[#fff9ec] text-[#363636] w-[70%]  mb-[16px] flex flex-col items-center p-[2em] rounded-[1em] mt-[3em]">
      <h1 className="text-[2em]">
        <b>
          <u>SUGGESTED READ</u> :
        </b>
        <span>
          {" "}
          {data ? data.split("%%")[0] : currentBookName ? currentBookName : ""}
        </span>
      </h1>

      <p className="w-[81%] mt-[0.6em] mb-[0.6em]">
        <b>
          <u>WHY?</u>
        </b>
        <span>
          {" "}
          {data
            ? data.split("%%")[1]
            : currentBookName
            ? "This is a fine read! Don't think too much and give it a shot...You won't regret :)"
            : ""}
        </span>
      </p>
    </div>
  );
};

export default CompareResult;
