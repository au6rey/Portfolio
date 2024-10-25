import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

type TechnicalSkillCardProps = {
  skill: string;
  percentage: number;
  tools: string[];
};

export function TechnicalSkillCard({
  skill,
  percentage,
}: // tools,
TechnicalSkillCardProps) {
  return (
    <div id={skill} className=" xs:max-w-xs pb-2 w-full">
      <div className="flex justify-between">
        <p className="font-semibold text-md text-accent-foreground">{skill}</p>
        <Badge variant={"secondary"} className="">
          {percentage}%
        </Badge>
      </div>
      <Progress value={percentage} className="my-1" />
      {/* <ul className="text-sm text-accent-foreground flex gap-2">
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </ul> */}
    </div>
  );
}
