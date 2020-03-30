import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import PageHeader from "."

describe("<PageHeader /> component", () => {
  it("should render correctly with no props", () => {
    rendersCorrectly(<PageHeader />)
  })
})
