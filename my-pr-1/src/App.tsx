import { useState } from "react";
import Box from "./box";

export default function App() {

    const [city, setCity] = useState<any>(null);

    return (

        <>
            <h1 className="title">country Explorer</h1>

            <div className="layout">

                {/* LEFT SIDE */}

                <div className="left">

                    <Box text="Paris"
                        img="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1470&auto=format&fit=crop"
                        country="France"
                        river="Seine"
                        population="2.1M"
                        setMessage={setCity}
                    />

                    <Box text="Dubai"
                        img="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1470&auto=format&fit=crop"
                        country="UAE"
                        river="Dubai Creek"
                        population="3.5M"
                        setMessage={setCity}
                    />

                    <Box text="Tokyo"
                        img="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1470&auto=format&fit=crop"
                        country="Japan"
                        river="Sumida"
                        population="14M"
                        setMessage={setCity}
                    />

                    <Box text="London"
                        img="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1470&auto=format&fit=crop"
                        country="UK"
                        river="Thames"
                        population="9M"
                        setMessage={setCity}
                    />

                    <Box text="Rome"
                        img="https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=1470&auto=format&fit=crop"
                        country="Italy"
                        river="Tiber"
                        population="2.8M"
                        setMessage={setCity} />

                    <Box text="Amsterdam"
                        img="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=1470&auto=format&fit=crop"
                        country="Netherlands"
                        river="Amstel"
                        population="0.9M"
                        setMessage={setCity} />

                    <Box text="Toronto"
                        img="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1470&auto=format&fit=crop"
                        country="Canada"
                        river="Don River"
                        population="2.9M"
                        setMessage={setCity} />

                </div>

                {/* CENTER VIEW */}

                <div className="center">

                    {city ? (

                        <div className="view">

                            <img src={city.img} />

                            <div className="details">

                                <h2>{city.text}</h2>
                                <p><b>Country:</b> {city.country}</p>
                                <p><b>River:</b> {city.river}</p>
                                <p><b>Population:</b> {city.population}</p>

                            </div>

                        </div>

                    ) : (<h2 className="select">Click a country</h2>)}

                </div>

                {/* RIGHT SIDE */}

                <div className="right">

                    <Box text="Moscow"
                        img="https://images.unsplash.com/photo-1513326738677-b964603b136d?q=80&w=1470&auto=format&fit=crop"
                        country="Russia"
                        river="Moskva"
                        population="12.5M"
                        setMessage={setCity}
                    />

                    <Box text="Seoul"
                        img="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1470&auto=format&fit=crop"
                        country="South Korea"
                        river="Han River"
                        population="9.7M"
                        setMessage={setCity}
                    />

                    <Box text="New York"
                        img="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=1470&auto=format&fit=crop"
                        country="USA"
                        river="Hudson"
                        population="8.4M"
                        setMessage={setCity}
                    />

                    <Box text="Sydney"
                        img="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1470&auto=format&fit=crop"
                        country="Australia"
                        river="Parramatta"
                        population="5.3M"
                        setMessage={setCity}
                    />

                    <Box text="Singapore"
                        img="https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=1470&auto=format&fit=crop"
                        country="Singapore"
                        river="Singapore River"
                        population="5.9M"
                        setMessage={setCity}
                    />

                    <Box text="Barcelona"
                        img="https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?q=80&w=1470&auto=format&fit=crop"
                        country="Spain"
                        river="Llobregat"
                        population="1.6M"
                        setMessage={setCity}
                    />

                    <Box text="Los Angeles"
                        img="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1470&auto=format&fit=crop"
                        country="USA"
                        river="LA River"
                        population="3.9M"
                        setMessage={setCity}
                    />

                </div>

            </div>

            {/* BOTTOM */}

            <div className="bottom">

                <Box
                    text="Bangkok"
                    img="https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1470&auto=format&fit=crop"
                    country="Thailand"
                    river="Chao Phraya"
                    population="10M"
                    setMessage={setCity}
                />

                <Box
                    text="Istanbul"
                    img="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1470&auto=format&fit=crop"
                    country="Turkey"
                    river="Golden Horn"
                    population="15M"
                    setMessage={setCity}
                />

                <Box
                    text="Cairo"
                    img="https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=1470&auto=format&fit=crop"
                    country="Egypt"
                    river="Nile"
                    population="9.5M"
                    setMessage={setCity}
                />

                <Box
                    text="Rio de Janeiro"
                    img="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1470&auto=format&fit=crop"
                    country="Brazil"
                    river="Carioca"
                    population="6.7M"
                    setMessage={setCity}
                />

            </div>

        </>

    )

}