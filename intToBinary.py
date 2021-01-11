# Matthew Setaro - python - convert ints to binary
nums = [77, 39, 59, 55, 77, 107, 46, 73, 65, 64, 247, 18, 420,
        111, 43, 25, 2345, 360, 864, 2119, 6385]


def inttobinary(num):
    binary_num = []
    for_math = num
    while for_math > 0:
        binary_num.append(for_math % 2)
        for_math //= 2
    # output
    index = len(binary_num) - 1
    output_string = ""
    while index > -1:
        output_string += str(binary_num[index])
        index -= 1
    return output_string


for i in nums:
    print(i, " in binary: ", inttobinary(i))


