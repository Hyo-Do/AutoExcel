const inputFormData: {
  id: "maxV" | "minV" | "deltaV" | "maxA" | "minA" | "deltaA";
  symbol: string;
  label: string;
}[] = [
  { id: "minV", symbol: "-V", label: "최소 전압" },
  { id: "maxV", symbol: "+V", label: "최대 전압" },
  { id: "deltaV", symbol: "ΔV", label: "랜덤 간격" },
  { id: "minA", symbol: "-A", label: "최소 전류" },
  { id: "maxA", symbol: "+A", label: "최대 전류" },
  { id: "deltaA", symbol: "ΔA", label: "랜덤 간격" },
];

export default inputFormData;
