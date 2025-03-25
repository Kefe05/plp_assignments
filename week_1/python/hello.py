print("Welcome to my basic calculator")

def checkOperator():
    """Ensures the user enters a valid mathematical operator."""
    while True:
        o = input("Enter your operator ('+', '-', '*', '/'): ")
        if o in ('+', '-', '*', '/'):
            return o
        else:
            print(f"Invalid operator '{o}'. Please enter one of '+', '-', '*', '/'.")

def validateDigits():
    """Ensures the user enters valid numeric values."""
    while True:
        try:
            a = float(input("Enter your first digit: "))
            b = float(input("Enter your second digit: "))
            return a, b  # Always returns valid values
        except ValueError:
            print("Invalid input! Please enter numeric values 😣😣")

def calc():
    """Performs the requested mathematical operation."""
    a, b = validateDigits()  # Ensures valid numbers are always returned
    operator = checkOperator()

    # Perform calculation
    if operator == '+':
        result = a + b
    elif operator == '-':
        result = a - b
    elif operator == '/':
        if b == 0:
            return "Error! Division by zero is not allowed."
        result = a / b
    else:
        result = a * b

    return f"Result: {result}"


print(calc())
