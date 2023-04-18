import { Country } from "@/utils/validate-password";
import { NextRouter, useRouter } from "next/router"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { FormEvent } from "react"


type DebouncedFunction<F extends (...args: any[]) => any> = (
  this: ThisParameterType<F>,
  ...args: Parameters<F>
) => void;

function debounce<F extends (...args: any[]) => any>(
  func: F,
  delay: number
): DebouncedFunction<F> {
  let timerId: ReturnType<typeof setTimeout> | undefined;

  return function (
    this: ThisParameterType<F>,
    ...args: Parameters<F>
  ) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const makeDebouncedRequest = debounce((attemptedPassword: string, router: NextRouter) => {
  fetch("/api/password", {
    method: "POST",
    body: JSON.stringify({ password: attemptedPassword }),
  }).then(res => res.json()).then((result: Country) => {
    if (result && result.slug) {
      router.push(`/${result.slug}`)
      return
    }
  }, () => {
    // error
  })
}, 500)

export default function Form() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const onPswdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)

    makeDebouncedRequest(event.target.value, router)
  }



  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="text-center flex-1">
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="my-6">
        {/* <label htmlFor="pwd"><h1 className='text-4xl font-black'>Sděl nám své heslo, diplomate</h1></label> */}
        </div>
        <div>

        <input ref={inputRef} className="p-4 text-center" autoComplete='off' placeholder="Sděl heslo, diplomate" style={{width: '100%', fontSize: '24px'}} type="text" value={password} onChange={onPswdChange} id="pswd" autoFocus />
        </div>
      </fieldset>
      <fieldset>
        <div className="text-center">
        {/* <button type="submit">Odeslat</button> */}
        </div>
      </fieldset>
    </form>
    </div>
  )
}
