"use client"

import { useEffect, useState } from "react";

const CustomizeProducts = ({ options }) => {
    const [selectedOptions, setSelectedOptions] = useState({});

    const handleOptionSelect = (optionName, choice) => {
        setSelectedOptions(prev => ({
            ...prev,
            [optionName]: choice
        }));
    };

    useEffect(() => {
        if (options && options.length > 0) {
            const initialSelections = {};
            options.forEach(option => {
                if (option.choices && option.choices.length > 0) {
                    initialSelections[option.name] = option.choices[0];
                }
            })
            setSelectedOptions(initialSelections)
        }
    }, [])
    return (
        <div className="flex flex-col gap-6">
            {options?.map((option, index) => (
                <div key={index}>
                    <h4 className="font-medium">Choose a {option.name.toLowerCase()}</h4>
                    <ul className=" flex items-center gap-3 mt-4">
                        {option?.choices?.map((choice) => {
                            const isSelected = selectedOptions[option.name]?.value === choice.value;

                            if (option.name === 'Color') {
                                return (
                                    <li
                                        key={choice.value}
                                        className={`w-8 h-8 rounded-full ring-1 ring-gray-300 relative ${choice.inStock ? 'cursor-pointer' : 'cursor-not-allowed'
                                            }`}
                                        style={{ backgroundColor: choice.value }}
                                        onClick={() => choice.inStock && handleOptionSelect(option.name, choice)}
                                        title={choice.description}
                                    >
                                        {isSelected && (
                                            <div className="absolute w-10 h-10 rounded-full ring-2 ring-gray-800 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" />
                                        )}
                                        {!choice.inStock && (
                                            <div className="absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2" />
                                        )}
                                    </li>
                                )
                            }
                            if (option.name === 'Size') {
                                return (
                                    <li
                                        key={choice.value}
                                        className={`ring-1 py-1 px-4 text-sm cursor-pointer rounded-md ${isSelected ? 'text-white bg-pink-600 ring-pink-600' : 'text-pink-600 ring-pink-300'
                                            } ${!choice.inStock ? 'cursor-not-allowed text-white bg-pink-200 ring-pink-300' : ''}`}
                                        onClick={() => choice.inStock && handleOptionSelect(option.name, choice)}
                                    >
                                        {choice.value}
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default CustomizeProducts