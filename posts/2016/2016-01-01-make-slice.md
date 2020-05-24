## Make a slice from a type

Do you know how to make a slice from a type of value. We will do it with `reflect.MakeSlice` of reflect package but it's a little complex to fulfill.
### Implementation

Actually, it's easy if you know how to implement.

```go
type User struct {
	Name   string
	Gender int
	Age    int
}

func main() {
	// Assign user
	user := User{}

	// Assign a value of reflect.Type
	typ := reflect.TypeOf(user)

	// Assign a slice using reflect.MakeSlice
	slice := reflect.MakeSlice(reflect.SliceOf(typ), 0, 0)

	x := reflect.New(slice.Type())
	x.Elem().Set(slice)

    // []User
	var userValue reflect.Value = x.Elem()

	// Do something...
}
```

At first, make `reflect.Type` from a value which is what you want slice. Then, use `reflect.MakeSlice` to obtain your slice.

### Code, All of your need

I wrote an example of `MakeSlice` for you all!
So see and touch the following code. :)

- [gist](https://gist.github.com/a1c4c30c71844ff3b818)
- [Go Playground](https://play.golang.org/p/f-ChmzkLRF)

Simply **Run** the code below.

<iframe src="https://play.golang.org/p/f-ChmzkLRF" frameborder="0" style="width: 100%; height: 100%"><a href="https://play.golang.org/p/f-ChmzkLRF">see this code in play.golang.org</a></iframe>

