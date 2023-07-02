import { formatDate } from "@/libs/utils.helper"

describe("Helper function formatDate()", () => {
  beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date("2023-03-24"))
  })
  afterAll(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it("should return Feb 1st 2023", () => {
    const date = "2023-02-01"
    expect(formatDate(date)).toBe("Feb 1st 2023")
  })

  it("should return Mar 24th 1991", () => {
    const date = "03-24-1991"
    expect(formatDate(date)).toBe("Mar 24th 1991")
  })

  it("should return about 9 hours ago", () => {
    const date = "03-24-2023"
    expect(formatDate(date)).toBe("about 9 hours ago")
  })

  it("should return Jul 2nd 2023", () => {
    jest.useFakeTimers().setSystemTime(new Date("2023-07-02"))
    const date = "07-02-2023"
    expect(formatDate(date, 0)).toBe("Jul 2nd 2023")
  })
})
