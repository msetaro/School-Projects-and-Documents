import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [5, 2, 7, 4]

y2 = [17, 12, 15, 14]

plt.plot(x, y, label="Data set 1", color='r')
plt.plot(x, y2, label="Gaga goes to Georgia")

plt.title("Our first graph")
plt.xlabel("Some demo x values")
plt.ylabel("Stock prices")


plt.legend()  # gives you a key, add labels in the plot like above
plt.show()
