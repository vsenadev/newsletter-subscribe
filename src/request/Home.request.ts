import React from "react";
import {IDifferences} from "../interface/IDifferences";

export async function GetDifferences(setData: React.Dispatch<React.SetStateAction<IDifferences | undefined>>){
    setData(require('../data/home.json'))
}