import React, { useState, useRef } from "react"
import Dropdown from "./components/Dropdown"
import InputField from "./components/InputField"
import { InputContextProvider } from "./context/InputContext"
import Body from "./components/Body"

function App() {
  const [copiedText, setCopiedText] = useState("")
  const [role, setRole] = useState("[Enter job role]")
  const [companyName, setCompanyName] = useState("[Enter company's name]")
  const [platform, setPlatform] = useState("[Enter platform's name]")
  const [jobLink, setJobLink] = useState("[Enter job description link]")

  // //useRef hook
  // const copyRef = useRef(null);

  // const copiedItem = () => {
  //   console.log(copyRef.current)
  //     copyRef.current;
  //     setCopiedText(window.navigator.clipboard.writeText())
  // }

  return (
    <InputContextProvider value={{role, companyName, platform, jobLink}}>
      <div className="container mx-auto my-10 flex-col items-center justify-center space-y-8 w-full h-screen p-10">

        <div className="flex items-center justify-center">
          <Dropdown />
        </div>

        <div className="flex justify-between">
          <InputField 
            label="Role" 
            type="text" 
            // value={name}
            onChange={(e) => setRole(e.target.value)}
            placeholder={role}
          />

          <InputField 
            label="Company Name" 
            type="text" 
            // value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder={companyName}
          />
          <InputField 
            label="Platform" 
            type="text" 
            onChange={(e) => setPlatform(e.target.value)}
            placeholder={platform}
          />

          <InputField 
            label="JD Link" 
            type="url" 
            onChange={(e) => setJobLink(e.target.value)}
            placeholder={jobLink}
          />
        </div>

        <hr className="h-[2px] bg-slate-300" />

        <Body/>
        
        <hr className="h-[2px] bg-slate-300" />

        {/* <div>
          <button 
            className="bg-blue-500 text-white p-2 my-5 rounded-lg hover:bg-blue-700"
            onClick={copiedItem}
          >
            Copy To Clipboard
          </button>
        </div> */}

      </div>
    </InputContextProvider>
  )
}

export default App