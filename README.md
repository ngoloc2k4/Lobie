Sure! Below are the explanations for each of the 8 keywords, following their respective code examples.

### 1. **Meaningful Naming (Đặt tên có ý nghĩa)**

**Example:**
```csharp
int a = 10;
int b = 20;
int c = a + b;
Console.WriteLine(c);
```
**Better:**
```csharp
int numberOfApples = 10;
int numberOfOranges = 20;
int totalFruits = numberOfApples + numberOfOranges;
Console.WriteLine(totalFruits);
```

**Explanation:**
Meaningful naming makes your code self-explanatory. In the "better" example, the variables `numberOfApples`, `numberOfOranges`, and `totalFruits` clearly describe what the code is doing, making it easier for others (and your future self) to understand the purpose of each variable without needing additional comments or context.

### 2. **Single Responsibility (Một trách nhiệm duy nhất)**

**Example:**
```csharp
class Report
{
    public void GenerateReport()
    {
        // Generate report logic
        Console.WriteLine("Report generated");

        // Send email logic
        Console.WriteLine("Email sent");
    }
}
```
**Better:**
```csharp
class ReportGenerator
{
    public void GenerateReport()
    {
        Console.WriteLine("Report generated");
    }
}

class EmailSender
{
    public void SendEmail()
    {
        Console.WriteLine("Email sent");
    }
}
```

**Explanation:**
Single Responsibility Principle states that a class or method should have only one reason to change. In the "better" example, the `ReportGenerator` class is responsible only for generating reports, and the `EmailSender` class is responsible for sending emails. This separation makes the code easier to maintain and extend since changes in report generation won't affect email sending and vice versa.

### 3. **Minimal Complexity (Đơn giản hóa)**

**Example:**
```csharp
int CalculateDiscount(int price)
{
    if (price > 100)
    {
        if (price > 200)
        {
            return price - 50;
        }
        return price - 20;
    }
    return price;
}
```
**Better:**
```csharp
int CalculateDiscount(int price)
{
    if (price > 200)
        return price - 50;
    if (price > 100)
        return price - 20;
    return price;
}
```

**Explanation:**
Minimal Complexity means reducing unnecessary complexity in code. In the "better" example, the nested if-statements are flattened to improve readability and simplify the logic. This makes the code easier to understand and maintain.

### 4. **DRY (Don't Repeat Yourself - Không lặp lại mã)**

**Example:**
```csharp
int CalculateArea(int length, int width)
{
    int area = length * width;
    Console.WriteLine("Area: " + area);
    return area;
}

int CalculatePerimeter(int length, int width)
{
    int perimeter = 2 * (length + width);
    Console.WriteLine("Perimeter: " + perimeter);
    return perimeter;
}
```
**Better:**
```csharp
void PrintResult(string label, int value)
{
    Console.WriteLine(label + ": " + value);
}

int CalculateArea(int length, int width)
{
    int area = length * width;
    PrintResult("Area", area);
    return area;
}

int CalculatePerimeter(int length, int width)
{
    int perimeter = 2 * (length + width);
    PrintResult("Perimeter", perimeter);
    return perimeter;
}
```

**Explanation:**
DRY (Don't Repeat Yourself) emphasizes reducing code duplication. In the "better" example, the repeated code for printing the result is extracted into a separate method `PrintResult`, making the code more modular and reducing the likelihood of errors when updating the print logic.

### 5. **Consistent Formatting (Định dạng nhất quán)**

**Example:**
```csharp
int Add(int a,int b){
  return a+b;
}
```
**Better:**
```csharp
int Add(int a, int b)
{
    return a + b;
}
```

**Explanation:**
Consistent Formatting ensures that code is uniformly structured, improving readability and making it easier to follow. The "better" example uses consistent spacing and indentation, making the code look cleaner and more professional, which is important for collaborative environments.

### 6. **Commenting Judiciously (Chú thích hợp lý)**

**Example:**
```csharp
int Add(int a, int b)
{
    // Add a and b together
    int result = a + b;
    // Return the result
    return result;
}
```
**Better:**
```csharp
int Add(int a, int b)
{
    // Adding two numbers to get the sum
    return a + b;
}
```

**Explanation:**
Commenting Judiciously means writing comments that add value, such as explaining why a particular approach was taken, rather than what the code is doing, which should be clear from the code itself. In the "better" example, the comment clarifies the purpose of the operation without restating the obvious.

### 7. **Testing and Error Handling (Kiểm thử và xử lý lỗi)**

**Example:**
```csharp
int Divide(int dividend, int divisor)
{
    return dividend / divisor;
}
```
**Better:**
```csharp
int Divide(int dividend, int divisor)
{
    if (divisor == 0)
    {
        throw new DivideByZeroException("Divisor cannot be zero.");
    }
    return dividend / divisor;
}
```

**Explanation:**
Testing and Error Handling ensure that your code handles unexpected situations gracefully and can be tested effectively. The "better" example includes error handling to prevent division by zero, which could cause the program to crash, making the code more robust.

### 8. **Modularization (Phân chia module)**

**Example:**
```csharp
void ProcessData(int[] data)
{
    for (int i = 0; i < data.Length; i++)
    {
        data[i] *= 2;
        Console.WriteLine(data[i]);
    }
}
```
**Better:**
```csharp
void ProcessData(int[] data)
{
    double[] doubledData = DoubleArrayValues(data);
    PrintArray(doubledData);
}

double[] DoubleArrayValues(int[] data)
{
    double[] result = new double[data.Length];
    for (int i = 0; i < data.Length; i++)
    {
        result[i] = data[i] * 2;
    }
    return result;
}

void PrintArray(double[] data)
{
    foreach (var item in data)
    {
        Console.WriteLine(item);
    }
}
```

**Explanation:**
Modularization involves breaking down code into smaller, reusable components or modules. The "better" example splits the `ProcessData` logic into two separate methods: one for doubling the array values and one for printing them. This makes the code more organized, easier to test, and more reusable.
