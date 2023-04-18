import { Country } from "@/utils/validate-password";
import { NextRouter, useRouter } from "next/router"
import { ChangeEvent, useRef, useState } from "react"
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
    if (result) {
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

  const onPswdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)

    makeDebouncedRequest(event.target.value, router)
  }



  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div>
        <label htmlFor="pwd">Zadejte heslo:</label>
        </div>
        <div>

        <input type="text" value={password} onChange={onPswdChange} id="pswd" />
        </div>
      </fieldset>
      <fieldset>
        <div className="text-center">
        {/* <button type="submit">Odeslat</button> */}
        </div>
      </fieldset>
    </form>
  )
}
