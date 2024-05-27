import {skills} from "@/lib/data";
import Image from "next/image";
import "../components/animations/animate.css";

type SkillProps = {
  title: string;
  image: string;
};

const SkillCard = ({title, image}: SkillProps) => {
  return (
    <div
      className={`relative flex h-[138px] w-[195px] items-center justify-center overflow-hidden rounded-xl py-0 sm:h-[140px] sm:w-[200px] md:h-[160px] md:w-[250px] lg:h-[190px] lg:w-[270px]`}>
      <Image
        src={image}
        alt={title}
        className="w-full items-stretch justify-center rounded-xl bg-cover bg-center"
      />
      <div className=" hidden h-[150%] w-full bg-gradient-to-t from-black to-transparent"></div>

      <div className="absolute bottom-3 left-5 hidden">
        <h4 className="text-[30px] text-white">{title}</h4>
      </div>
    </div>
  );
};

const Skill = () => {
  return (
    <div className="animate absolute bottom-5 flex w-[1100%] border-[1px] border-[#0E1016] sm:w-[680%] md:w-[710%] lg:w-[600%] xl:w-[400%]">
      <div className="mx-auto flex w-[50%] justify-around gap-10  lg:my-[1px]">
        {skills.map((skill: SkillProps, index) => (
          <SkillCard key={index} title={skill.title} image={skill.image} />
        ))}
      </div>
      <div className="mx-auto flex w-[50%] justify-around gap-10  lg:my-[1px]">
        {skills.map((skill: SkillProps, index) => (
          <SkillCard key={index} title={skill.title} image={skill.image} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
