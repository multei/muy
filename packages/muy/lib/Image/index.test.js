import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import Image from "."

describe("Image component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<Image />)
  })
  it("should render correctly with cover variant", () => {
    rendersCorrectly(<Image variant={"cover"} />)
  })
})
