import { Component} from "./Component.js"
import { Form } from "./Form.js"
import { Input } from "./Input.js"
import { Label } from "./Label.js"

const el = new Component('h1', 'body', { innerText: 'Olá, Mundo!' })
console.log(el)

el.tag = 'h2'
el.build().render()
