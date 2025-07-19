import React from "react";

const Calendar = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/26-july-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px",
        width: "100%",
        padding: "32px",
        borderRadius: "16px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
      }}
    >
      {/* এখানে আপনার ক্যালেন্ডার কোড থাকবে */}
      <h2 style={{ color: "#fff", textShadow: "2px 2px 8px #000" }}>
        ক্যালেন্ডার
      </h2>
      {/* ...existing calendar code... */}
    </div>
  );
};

export default Calendar;