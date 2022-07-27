
import timeit
code_to_start = '''

from math import sqrt
import sys

def simple(number):
    some_list = []
    i = 2
    while len(some_list) < number:
           
        marker = 0
        for n in range(2, int(sqrt(i))+1):
            if i % n == 0:
                marker = 1
        if marker == 0:
            some_list.append(i)
        i += 1
    return some_list


print(simple(int(sys.argv[1])))
'''

elapsed_time = timeit.timeit(code_to_start, number=1)
print(elapsed_time)