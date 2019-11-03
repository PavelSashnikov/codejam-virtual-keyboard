const eng = [
    {
        content: ['`', '~'],
        row: 0,
        classNames: ['key'],
        keyCode: 192
    },
    {
        content: ['1', '!'],
        classNames: ['key'],
        row: 0,
        keyCode: 49
    },
    {
        content: ['2', '@'],
        classNames: ['key'],
        row: 0,
        keyCode: 50
    },
    {
        content: ['3', '#'],
        classNames: ['key'],
        row: 0,
        keyCode: 51
    },
    {
        content: ['4', '$'],
        classNames: ['key'],
        row: 0,
        keyCode: 52
    },
    {
        content: ['5', '%'],
        classNames: ['key'],
        row: 0,
        keyCode: 53
    },
    {
        content: ['6', '^'],
        classNames: ['key'],
        row: 0,
        keyCode: 54
    },
    {
        content: ['7', '&'],
        classNames: ['key'],
        row: 0,
        keyCode: 55
    },
    {
        content: ['8', '*'],
        classNames: ['key'],
        row: 0,
        keyCode: 56
    },
    {
        content: ['9', '('],
        classNames: ['key'],
        row: 0,
        keyCode: 57
    },
    {
        content: ['0', ')'],
        classNames: ['key'],
        row: 0,
        keyCode: 48
    },
    {
        content: ['-', '_'],
        classNames: ['key'],
        row: 0,
        keyCode: 189
    },
    {
        content: ['=', '+'],
        classNames: ['key'],
        row: 0,
        keyCode: 187
    },
    {
        content: ['Backspace'],
        classNames: ['key', 'backspace'],
        row: 0,
        keyCode: 8
    },
    {
        content: ['Tab'],
        classNames: ['key', 'tab'],
        row: 1,
        keyCode: 9
    },
    {
        content: ['q', 'Q'],
        classNames: ['key', 'changeable'],
        row: 1,
        keyCode: 81
    },
    {
        content: ['w', 'W'],
        classNames: ['key', 'changeable'],
        row: 1,
        keyCode: 87
    },
    {
        content: ['e', 'E'],
        classNames: ['key', 'changeable'],
        row: 1,
        keyCode: 69
    },
    {
        content: ['r', 'R'],
        classNames: ['key', 'changeable'],
        row: 1,
        keyCode: 82
    },
    {
        content: ['t', 'T'],
        classNames: ['key', 'changeable'],
        row: 1,
        keyCode: 84
    },
    {
        content: ['y', 'Y'],
        classNames: ['key', 'changeable'],
        row: 1,
        keyCode: 89
    },
    {
        content: ['u', 'U'],
        classNames: ['key', 'changeable'],
        row: 1,
        keyCode: 85
    },
    {
        content: ['i', 'I'],
        classNames: ['key', 'changeable'],
        row: 1,
        keyCode: 73
    },
    {
        content: ['o', 'O'],
        classNames: ['key', 'changeable'],
        row: 1,
        keyCode: 79
    },
    {
        content: ['p', 'P'],
        classNames: ['key', 'changeable'],
        row: 1,
        keyCode: 80
    },
    {
        content: ['[', '{'],
        classNames: ['key'],
        row: 1,
        keyCode: 219
    },
    {
        content: [']', '}'],
        classNames: ['key'],
        row: 1,
        keyCode: 221
    },
    {
        content: ['\\', '|'],
        classNames: ['key'],
        row: 1,
        keyCode: 220
    },
    {
        content: ['CapsLock'],
        classNames: ['key', 'capslock'],
        row: 2,
        keyCode: 20
    },
    {
        content: ['a', 'A'],
        classNames: ['key', 'changeable'],
        row: 2,
        keyCode: 65
    },
    {
        content: ['s', 'S'],
        classNames: ['key', 'changeable'],
        row: 2,
        keyCode: 83
    },
    {
        content: ['d', 'D'],
        classNames: ['key', 'changeable'],
        row: 2,
        keyCode: 68
    },
    {
        content: ['f', 'F'],
        classNames: ['key', 'changeable'],
        row: 2,
        keyCode: 70
    },
    {
        content: ['g', 'G'],
        classNames: ['key', 'changeable'],
        row: 2,
        keyCode: 71
    },
    {
        content: ['h', 'H'],
        classNames: ['key', 'changeable'],
        row: 2,
        keyCode: 72
    },
    {
        content: ['j', 'J'],
        classNames: ['key', 'changeable'],
        row: 2,
        keyCode: 74
    },
    {
        content: ['k', 'K'],
        classNames: ['key', 'changeable'],
        row: 2,
        keyCode: 75
    },
    {
        content: ['l', 'L'],
        classNames: ['key', 'changeable'],
        row: 2,
        keyCode: 76
    },
    {
        content: [';', ':'],
        classNames: ['key'],
        row: 2,
        keyCode: 186
    },
    {
        content: ['\'', '\"'],
        classNames: ['key'],
        row: 2,
        keyCode: 222
    },
    {
        content: ['Enter'],
        classNames: ['key', 'enter'],
        row: 2,
        keyCode: 13
    },
    {
        content: ['Shift'],
        classNames: ['key', 'shift'],
        row: 3,
        keyCode: 16
    },
    {
        content: ['z', 'Z'],
        classNames: ['key', 'changeable'],
        row: 3,
        keyCode: 90
    },
    {
        content: ['x', 'X'],
        classNames: ['key', 'changeable'],
        row: 3,
        keyCode: 88
    },
    {
        content: ['c', 'C'],
        classNames: ['key', 'changeable'],
        row: 3,
        keyCode: 67
    },
    {
        content: ['v', 'V'],
        classNames: ['key', 'changeable'],
        row: 3,
        keyCode: 86
    },
    {
        content: ['b', 'B'],
        classNames: ['key', 'changeable'],
        row: 3,
        keyCode: 66
    },
    {
        content: ['n', 'N'],
        classNames: ['key', 'changeable'],
        row: 3,
        keyCode: 78
    },
    {
        content: ['m', 'M'],
        classNames: ['key', 'changeable'],
        row: 3,
        keyCode: 77
    },
    {
        content: [',', '<'],
        classNames: ['key'],
        row: 3,
        keyCode: 188
    },
    {
        content: ['.', '>'],
        classNames: ['key'],
        row: 3,
        keyCode: 190
    },
    {
        content: ['/', '?'],
        classNames: ['key'],
        row: 3,
        keyCode: 191
    },
    {
        content: ['↑'],
        classNames: ['key', 'arrow-up'],
        row: 3,
        keyCode: 38
    },
    {
        content: ['Shift'],
        classNames: ['key', 'shift-right'],
        row: 3,
        keyCode: 16
    },
    {
        content: ['Ctrl'],
        classNames: ['key', 'ctrl-left'],
        row: 4,
        keyCode: 17
    },
    {
        content: ['Win'],
        classNames: ['key', 'win'],
        row: 4,
        keyCode: 91
    },
    {
        content: ['Alt'],
        classNames: ['key', 'alt-left'],
        row: 4,
        keyCode: 18
    },
    {
        content: [' '],
        classNames: ['key', 'space'],
        row: 4,
        keyCode: 32
    },
    {
        content: ['Alt'],
        classNames: ['key', 'alt-right'],
        row: 4,
        keyCode: 18
    },
    {
        content: ['Ctrl'],
        classNames: ['key', 'ctrl-right'],
        row: 4,
        keyCode: 17
    },
    {
        content: ['←'],
        classNames: ['key', 'arrow-left'],
        row: 4,
        keyCode: 37
    },
    {
        content: ['↓'],
        classNames: ['key', 'arrow-down'],
        row: 4,
        keyCode: 40
    },
    {
        content: ['→'],
        classNames: ['key', 'arrow-right'],
        row: 4,
        keyCode: 39
    }
];

const rus = [
    {
        content: ['ё', 'Ё'],
        row: 0,
        keyCode: 192
    },
    {
        content: ['1', '!'],
        row: 0,
        keyCode: 49
    },
    {
        content: ['2', '\"'],
        row: 0,
        keyCode: 50
    },
    {
        content: ['3', '№'],
        row: 0,
        keyCode: 51
    },
    {
        content: ['4', ';'],
        row: 0,
        keyCode: 52
    },
    {
        content: ['5', '%'],
        row: 0,
        keyCode: 53
    },
    {
        content: ['6', ':'],
        row: 0,
        keyCode: 54
    },
    {
        content: ['7', '?'],
        row: 0,
        keyCode: 55
    },
    {
        content: ['8', '*'],
        row: 0,
        keyCode: 56
    },
    {
        content: ['9', '('],
        row: 0,
        keyCode: 57
    },
    {
        content: ['0', ')'],
        row: 0,
        keyCode: 48
    },
    {
        content: ['-', '_'],
        row: 0,
        keyCode: 189
    },
    {
        content: ['=', '+'],
        row: 0,
        keyCode: 187
    },
    {
        content: ['Backspace'],
        row: 0,
        keyCode: 8
    },
    {
        content: ['Tab'],
        row: 1,
        keyCode: 9
    },
    {
        content: ['й', 'Й'],
        row: 1,
        keyCode: 81
    },
    {
        content: ['ц', 'Ц'],
        row: 1,
        keyCode: 87
    },
    {
        content: ['у', 'У'],
        row: 1,
        keyCode: 69
    },
    {
        content: ['к', 'К'],
        row: 1,
        keyCode: 82
    },
    {
        content: ['е', 'Е'],
        row: 1,
        keyCode: 84
    },
    {
        content: ['н', 'Н'],
        row: 1,
        keyCode: 89
    },
    {
        content: ['г', 'Г'],
        row: 1,
        keyCode: 85
    },
    {
        content: ['ш', 'Ш'],
        row: 1,
        keyCode: 73
    },
    {
        content: ['щ', 'Щ'],
        row: 1,
        keyCode: 79
    },
    {
        content: ['з', 'З'],
        row: 1,
        keyCode: 80
    },
    {
        content: ['х', 'Х'],
        row: 1,
        keyCode: 219
    },
    {
        content: ['ъ', 'Ъ'],
        row: 1,
        keyCode: 221
    },
    {
        content: ['\\', '/'],
        row: 1,
        keyCode: 220
    },
    {
        content: ['CapsLock'],
        row: 2,
        keyCode: 20
    },
    {
        content: ['ф', 'Ф'],
        row: 2,
        keyCode: 65
    },
    {
        content: ['ы', 'Ы'],
        row: 2,
        keyCode: 83
    },
    {
        content: ['в', 'В'],
        row: 2,
        keyCode: 68
    },
    {
        content: ['а', 'А'],
        row: 2,
        keyCode: 70
    },
    {
        content: ['п', 'П'],
        row: 2,
        keyCode: 71
    },
    {
        content: ['р', 'Р'],
        row: 2,
        keyCode: 72
    },
    {
        content: ['о', 'О'],
        row: 2,
        keyCode: 74
    },
    {
        content: ['л', 'Л'],
        row: 2,
        keyCode: 75
    },
    {
        content: ['д', 'Д'],
        row: 2,
        keyCode: 76
    },
    {
        content: ['ж', 'Ж'],
        row: 2,
        keyCode: 186
    },
    {
        content: ['э', 'Э'],
        row: 2,
        keyCode: 222
    },
    {
        content: ['Enter'],
        row: 2,
        keyCode: 13
    },
    {
        content: ['Shift'],
        row: 3,
        keyCode: 16
    },
    {
        content: ['я', 'Я'],
        row: 3,
        keyCode: 90
    },
    {
        content: ['ч', 'Ч'],
        row: 3,
        keyCode: 88
    },
    {
        content: ['с', 'С'],
        row: 3,
        keyCode: 67
    },
    {
        content: ['м', 'М'],
        row: 3,
        keyCode: 86
    },
    {
        content: ['и', 'И'],
        row: 3,
        keyCode: 66
    },
    {
        content: ['т', 'Т'],
        row: 3,
        keyCode: 78
    },
    {
        content: ['ь', 'Ь'],
        row: 3,
        keyCode: 77
    },
    {
        content: ['б', 'Б'],
        row: 3,
        keyCode: 188
    },
    {
        content: ['ю', 'Ю'],
        row: 3,
        keyCode: 190
    },
    {
        content: ['.', ','],
        row: 3,
        keyCode: 191
    },
    {
        content: ['↑'],
        row: 3,
        keyCode: 38
    },
    {
        content: ['Shift'],
        row: 3,
        keyCode: 16
    },
    {
        content: ['Ctrl'],
        row: 4,
        keyCode: 17
    },
    {
        content: ['Win'],
        row: 4,
        keyCode: 91
    },
    {
        content: ['Alt'],
        row: 4,
        keyCode: 18
    },
    {
        content: [' '],
        row: 4,
        keyCode: 32
    },
    {
        content: ['Alt'],
        row: 4,
        keyCode: 18
    },
    {
        content: ['Ctrl'],
        row: 4,
        keyCode: 17
    },
    {
        content: ['←'],
        row: 4,
        keyCode: 37
    },
    {
        content: ['↓'],
        row: 4,
        keyCode: 40
    },
    {
        content: ['→'],
        row: 4,
        keyCode: 39
    }
];