import React from "react";
import Head from "../components/Head";

const Complete = () => {
  return (
    <main className="container">
      <Head step={3} />
      <section>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-2xl">ขอบคุณ 🎉</p>
          <h2 className="text-3xl text-center">เราได้รับรายการสั่งซื้อ<br />ของคุณเรียบร้อย</h2>
        </div>
      </section>
    </main>
  );
};

export default Complete;
