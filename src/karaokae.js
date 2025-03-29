import React from "react";
import { useState } from "react";

const ratePerHour = {
  student: 80,
  regular: 120,
};

const calculateTotal = (hours, isStudent, setTotal) => {
  if (!hours) {
    alert("กรุณากรอกจำนวนชั่วโมง");
  } else {
    setTotal(hours * (isStudent ? ratePerHour.student : ratePerHour.regular));
  }
};

export default function Karaoke() {
  const [hours, setHours] = useState("");
  const [total, setTotal] = useState("");
  const [isStudent, setIsStudent] = useState(false);

  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <table border="2" width="400" bordercolor="#000000" cellPadding="10">
            <thead>
                <tr>
                    <td colSpan="2" align="left" id="karaokae">ร้านคาราโอเกะ</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="radio" id="regular" name="customerType" value="noHaveCard" onChange={() => setIsStudent(false)} />
                        <label htmlFor="regular">ไม่มีบัตรนักศึกษา</label>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; ชั่วโมงละ 120 บาท จำนวน <input type="text" size="2" value={isStudent ? "" : hours} onChange={(e) => setHours(e.target.value)} /> ชั่วโมง
                        <br/>
                        <input type="radio" id="student" name="customerType" value="haveCard" checked={isStudent} onChange={() => setIsStudent(true)} />
                        <label htmlFor="student">มีบัตรนักศึกษา</label>
                        <br/>
                        &nbsp;&nbsp;&nbsp;&nbsp; ชั่วโมงละ 80 บาท จำนวน <input type="text" size="2" value={isStudent ? hours : ""} onChange={(e) => setHours(e.target.value)} /> ชั่วโมง
                    </td>
                </tr>
            </tbody>
        </table>
        <br/>
        <button onClick={() => calculateTotal(hours, isStudent, setTotal)}>คิดเงิน</button>
        <br/>
        <span>
            รวมเป็นเงินทั้งสิ้น = <input type="text" value={total} readOnly /> บาท
        </span>
    </div>
  );
}