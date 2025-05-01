import logo from './assets/bank-audi-logo-dark.png'
import InputField from './components/InputField'
import LinkRow from './components/LinkRow'
import LogoLink from './components/LogoLink'
import { PrimaryButton } from './components/PrimaryButton'
import Security from './components/Security'

function App() {

  return (
    <main className="top-0 left-0 py-8 gap-4 bg-[#e5ecf3] flex flex-col  min-h-screen absolute w-[368px] items-center ">

      <LogoLink href={"https://www.fabmisr.com.eg/en/personal-banking"} src={logo} alt="logo" />

      <div className='mt-16 '>
        <InputField label="UserID" />
      </div>

    <InputField label="Password" />

      <PrimaryButton >
        Log In
      </PrimaryButton>

     <LinkRow />

      <Security />

    </main>
  )
}

export default App
