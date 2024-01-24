import { capitalizeWord, formatDate } from "@/libs/utils/utils.helpers"

describe("formateDate function", () => {
  it("should return Mar 24th 1991", () => {
    const date = "03-24-1991"
    expect(formatDate(date)).toBe("Mar 24th 1991")
  })
})

describe("Helper function capitalizeWord", () => {
  it("should return Hello", () => {
    const word = "hELLO"
    expect(capitalizeWord(word)).toBe("Hello")
  })
})
