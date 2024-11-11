// utils.js
export const getColorForInitial = (initial) => {
  const colors = {
    A: "#FFB6C1",
    B: "#FF69B4",
    C: "#FF1493",
    D: "#DB7093",
    E: "#C71585",
    F: "#FF6347",
    G: "#FF4500",
    H: "#FFD700",
    I: "#FFFFE0",
    J: "#ADFF2F",
    K: "#7FFF00",
    L: "#32CD32",
    M: "#00FA9A",
    N: "#00FF7F",
    O: "#3CB371",
    P: "#2E8B57",
    Q: "#20B2AA",
    R: "#48D1CC",
    S: "#00CED1",
    T: "#40E0D0",
    U: "#00BFFF",
    V: "#1E90FF",
    W: "#6495ED",
    X: "#7B68EE",
    Y: "#6A5ACD",
    Z: "#483D8B",
  };
  return colors[initial] || "#ccc";
};
