import * as React, { Component } from "react";

export interface HelloProps {
  compiler: string,
  flamework: string,
}

export class Hello extends Component<HelloProps, undefined> {
  <h1>
    Hello from {props.compiler} and {props.flamework}!
  </h1> 
}