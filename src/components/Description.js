import React from "react";
import TextWithLine from "./common/textWithLine";
import Head from "next/head";

function Description() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-[#170550] text-white p-4 w-full TextCenter " id="des">
        <TextWithLine text="About Me" />
        <div className="flex flex-col   md:flex-row  gap-8 py-8">
          <div className="md:pl-48 ImageCenter ">
            <img
              src="./persion.jpg"
              alt="Image Description"
              className=" h-auto md:h-auto rounded "
              style={{ maxWidth: "360px", maxHeight: "350px" }}
            />
          </div>
          <div className="flex flex-col  md:w-1/2 space-y-8">
            <h2 className="text-white font-semibold text-3xl">
              Frontend Developer
            </h2>
            <p className="leading-normal font-semibold text-sm ">
              Dedicated and detail-oriented React.js developer with 1.5 years of
              hands-on experience in designing, implementing, and maintaining
              innovative web applications. Proficient in front-end technologies,
              including React.js,JavaScript, HTML,and CSS.Proven track record of
              successfully completing projects on time and exceeding client
              expectations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
