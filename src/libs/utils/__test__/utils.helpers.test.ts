import { capitalizeWord, formatDateFromNow } from "@/libs/utils/utils.helpers"

describe("Helper function formatDateFromNow()", () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date("2023-03-24"))
  })
  afterAll(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it("should return Feb 1st 2023", () => {
    const date = "2023-02-01"
    expect(formatDateFromNow(date)).toBe("Feb 1st 2023")
  })

  it("should return Mar 24th 1991", () => {
    const date = "03-24-1991"
    expect(formatDateFromNow(date)).toBe("Mar 24th 1991")
  })

  it("should return about 9 hours ago", () => {
    const date = "03-24-2023"
    expect(formatDateFromNow(date)).toBe("about 9 hours ago")
  })

  it("should return Jul 2nd 2023", () => {
    jest.useFakeTimers().setSystemTime(new Date("2023-07-02"))
    const date = "07-02-2023"
    expect(formatDateFromNow(date, 0)).toBe("Jul 2nd 2023")
  })
})

describe("Helper function capitalizeWord", () => {
  it("should return Hello", () => {
    const word = "hELLO"
    expect(capitalizeWord(word)).toBe("Hello")
  })
})
