import React from 'react';
export const addStyles = (string:string) => {
    const splitted = string.split(' ');
    const result = splitted.map((word) => {
        if (word === '') {
            return word + '  ';
        }
        if (word !== '') {
            return word + ' ';
        }

        return word;
    });

    const final = result.map((word) => {
        switch (word.trim()) {
            case 'throw':
            case 'new':
            case 'const':
            case 'let':
            case '=>':
            case '}':
            case '{':
            case 'class':
            case 'if':
                return <span className = 'variable'>{word}</span>;
            case 'return':
                return <span className = 'return'>{word}</span>;
            case 'function':
                return <span className = 'function'>{word}</span>;
            case '+':
            case '-':
            case '=':
            case '===':
            case ':':
            case '++':
            case '--':
                return <span className = 'blue'>{word}</span>;
            case 'false':
            case 'true':
            case 'true;':
            case 'false;':
                return <span className = 'orange'>{word}</span>;
            case 'Error':
            case ')':
            case '(':
                return <span className = 'yellow'>{word}</span>;
            default:
                break;
        }

        return <span>{word}</span>;
    });

    return final;
};
