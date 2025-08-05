import { LucideProps } from "lucide-react";

type BadgeType = {
  title: string;
  description: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

export default BadgeType;
