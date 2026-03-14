interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionGridProps {
  weeks: ContributionWeek[];
}

function getColor(count: number): string {
  if (count === 0) return "rgba(255,255,255,0.04)";
  if (count < 3) return "rgba(0,255,135,0.2)";
  if (count < 6) return "rgba(0,255,135,0.4)";
  if (count < 10) return "rgba(0,255,135,0.65)";
  return "rgba(0,255,135,0.9)";
}

export default function ContributionGrid({ weeks }: ContributionGridProps) {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[3px] min-w-max">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-[3px]">
            {week.contributionDays.map((day, di) => (
              <div
                key={di}
                title={`${day.date}: ${day.contributionCount} contributions`}
                className="rounded-sm transition-all duration-200 hover:scale-125"
                style={{
                  width: "10px",
                  height: "10px",
                  background: getColor(day.contributionCount),
                  border: day.contributionCount > 0
                    ? "1px solid rgba(0,255,135,0.15)"
                    : "1px solid rgba(255,255,255,0.04)",
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
