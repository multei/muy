import React from "react"
import rendersCorrectly from "../../test-utils/rendersCorrectly"
import SiteTitle from "./index"

describe("<SiteTitle />", () => {
  it("should render correctly", () => {
    rendersCorrectly(<SiteTitle />)
  })
  it("should render correctly with inherit color", () => {
    rendersCorrectly(<SiteTitle color={"inherit"} />)
  })
  it("should render correctly with primary color", () => {
    rendersCorrectly(<SiteTitle color={"primary"} />)
  })
})
