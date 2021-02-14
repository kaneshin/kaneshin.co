import * as utils from "../utils";

describe("joinSafety", () => {
  describe("when a given string has protocol", () => {
    it("should concatenate pathname properly", () => {
      expect(utils.joinSafety("file://path/to", "foo/bar")).toBe("file://path/to/foo/bar");
      expect(utils.joinSafety("http://example.com", "foo/bar")).toBe("http://example.com/foo/bar");

      expect(utils.joinSafety("https://example.com", "foo/bar")).toBe("https://example.com/foo/bar");
      expect(utils.joinSafety("https://example.com/", "/foo/bar")).toBe("https://example.com/foo/bar");
      expect(utils.joinSafety("https://example.com/foo", "bar/baz")).toBe("https://example.com/foo/bar/baz");
      expect(utils.joinSafety("https://example.com/foo/", "/bar/baz")).toBe("https://example.com/foo/bar/baz");
      expect(utils.joinSafety("https://example.com/foo/", "/bar", "/baz", "qux")).toBe(
        "https://example.com/foo/bar/baz/qux",
      );
    });

    it("should concatenate pathname trailing query", () => {
      expect(utils.joinSafety("https://example.com/foo?foo=bar&baz=qux", "/bar/baz")).toBe(
        "https://example.com/foo/bar/baz?foo=bar&baz=qux",
      );
    });
  });

  expect(utils.joinSafety("foo", "bar", "baz")).toBe("foo/bar/baz");
  expect(utils.joinSafety("/foo", "bar", "baz")).toBe("/foo/bar/baz");
  expect(utils.joinSafety("/foo", "/bar", "/baz")).toBe("/foo/bar/baz");
  expect(utils.joinSafety("/foo", "//bar", "///baz")).toBe("/foo/bar/baz");
  expect(utils.joinSafety("//example.com/foo/", "bar", "baz")).toBe("//example.com/foo/bar/baz");
});

describe("baseUrl", () => {
  it("should return the first arg because of its validated", () => {
    expect(utils.baseUrl("https://example.com/foo/bar/example.jpg", "https://eure.jp")).toBe(
      "https://example.com/foo/bar/example.jpg",
    );
  });

  it("should append the protocol of the second arg", () => {
    expect(utils.baseUrl("//example.com/foo/bar/example.jpg", "https://eure.jp")).toBe(
      "https://example.com/foo/bar/example.jpg",
    );
    expect(utils.baseUrl("//example.com/foo/bar/example.jpg", "http://eure.jp")).toBe(
      "http://example.com/foo/bar/example.jpg",
    );
  });

  it("should concatenate the first arg with the second arg", () => {
    expect(utils.baseUrl("foo/bar/example.jpg", "https://eure.jp")).toBe("https://eure.jp/foo/bar/example.jpg");
    expect(utils.baseUrl("/foo/bar/example.jpg", "https://eure.jp")).toBe("https://eure.jp/foo/bar/example.jpg");
  });
});
