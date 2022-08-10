import React, { KeyboardEvent, useState } from "react";
import env from "../utils/env";
import axios, { AxiosError } from "axios";
import capitalizeText from "../utils/capitilize";

const InputCard = () => {
    const [query, setQuery] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [temp, setTemp] = useState<number>()

    const handleQueryChange = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setQuery(event.currentTarget.value)
    }

    const searchWeather = async (event: KeyboardEvent<HTMLInputElement>) => {
        if (String(event.key).toLocaleLowerCase() === "enter") {
            try {
                const _query = new URLSearchParams({ q: query })

                const baseURL = `${env.apiURL}/api?${_query}`;
                const { data: { details } } = await axios.get(baseURL);
                const { name, sys: { country }, main: { temp } } = details;
                setCity([name, country].join(", "));
                setTemp(Math.round(temp));

            } catch (error: unknown) {
                if (error instanceof AxiosError) {
                    const { details: { message } } = error.response?.data;
                    console.log(capitalizeText(message));
                }
            }
        }
    }

    return <div className="bg-gray-50 dark:bg-grey-500 text-all px-4 py-6 w-full md:w-3/6 rounded shadow-md">
        {(city && temp) ? <>
            <p className="font-semibold text-all text-2xl text-center">Weather in {city}</p>
            <p className="font-semibold text-all text-2xl text-center">{temp} &deg;C</p>
        </> : <>
            <p className="font-semibold text-all text-2xl text-center">Enter a location to search</p>
        </>}

        <div className="my-2">
            <input
                type="text"
                placeholder="Thessaloniki, Greece"
                value={query}
                onChange={handleQueryChange}
                onKeyUp={searchWeather}
                className="outline-none w-full px-4 py-2 rounded border bg-all text-all"
            />
        </div>
    </div>
}

export default InputCard;