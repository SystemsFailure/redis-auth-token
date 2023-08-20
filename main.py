import time

def functionDecorator(func) -> None:
    def handler(*args, **kwargs):
        startTime = time.time()
        func(*args, **kwargs)
        resultTime = time.time() - startTime
        print(f'время выполнения : {round(resultTime, 4)}s')
    return handler

@functionDecorator
def sum_(a, b):
    result = a + b
    print(a, b, 'sum: {}'.format(result))
    return result


if __name__ == '__main__':
    sum_(1,2)