"use client"
import React, {useState} from "react";
import WhatsappChatBox from "@/app/components/whatsappChatBox";

export default function Home() {
    const [value, setValue] = useState('')
  return (
      <>
          <WhatsappChatBox
              value={value}
              onChange={(e, val) => setValue(e)}
              title={"Titssle"}
              max={5125}
          />
      </>
  );
}
