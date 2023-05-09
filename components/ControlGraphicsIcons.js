import {Box} from "@mui/material";
import React, {useState} from "react";

import Image from 'next/image';

import EggplantGray from '../const/graphics/MPX_eggplant_gray.svg'
import BearGray from '../const/graphics/MPX_bear_gray.svg'
import DevilGray from '../const/graphics/MPX_devil_gray.svg'
import DropletsGray from '../const/graphics/MPX_droplets_gray.svg'
import HandshakeGray from '../const/graphics/MPX_handshake_gray.svg'
import HeartGray from '../const/graphics/MPX_heart_gray.svg'
import PeachGray from '../const/graphics/MPX_peach_gray.svg'
import PigNoseGray from '../const/graphics/MPX_pignose_gray.svg'
import TacoGray from '../const/graphics/MPX_taco_gray.svg'
import TulipGray from '../const/graphics/MPX_tulip_gray.svg'
import UnicornGray from '../const/graphics/MPX_unicorn_gray.svg'

import EggplantO from '../const/graphics/MPX_eggplant.svg'
import BearO from '../const/graphics/MPX_bear.svg'
import DevilO from '../const/graphics/MPX_devil.svg'
import DropletsO from '../const/graphics/MPX_droplets.svg'
import HandshakeO from '../const/graphics/MPX_handshake.svg'
import HeartO from '../const/graphics/MPX_heart.svg'
import PeachO from '../const/graphics/MPX_peach.svg'
import PigNoseO from '../const/graphics/MPX_pignose.svg'
import TacoO from '../const/graphics/MPX_taco.svg'
import TulipO from '../const/graphics/MPX_tulip.svg'
import UnicornO from '../const/graphics/MPX_unicorn.svg'


export function Eggplant(props) {
    const {selected, size} = props;

    return (<Image
        priority
        src={selected ? EggplantO : EggplantGray}
        width={size ? size : 50}
        height={size ? size : 50}
    />)
}

export function Bear(props) {
    const {selected, size} = props;
    return (<Image
        priority
        src={selected ? BearO : BearGray}
        width={size ? size : 50}
        height={size ? size : 50}
    />)
}

export function Devil(props) {
    const {selected, size} = props;
    return (<Image
        priority
        src={selected ? DevilO : DevilGray}
        width={size ? size : 50}
        height={size ? size : 50}
    />)
}

export function Droplets(props) {
    const {selected, size} = props;
    return (<Image
        priority
        src={selected ? DropletsO : DropletsO}
        width={size ? size : 50}
        height={size ? size : 50}
    />)
}

export function Handshake(props) {
    const {selected, size} = props;
    return (<Image
        priority
        src={selected ? HandshakeO : HandshakeGray}
        width={size ? size : 50}
        height={size ? size : 50}
    />)
}

export function Heart(props) {
    const {selected, size} = props;
    return (<Image
        priority
        src={selected ? HeartO : HeartGray}
        width={size ? size : 50}
        height={size ? size : 50}
    />)
}

export function Peach(props) {
    const {selected, size} = props;
    return (<Image
        priority
        src={selected ? PeachO : PeachGray}
        width={size ? size : 50}
        height={size ? size : 50}
    />)
}

export function PigNose(props) {
    const {selected, size} = props;
    return (<Image
        priority
        src={selected ? PigNoseO : PigNoseGray}
        width={size ? size : 50}
        height={size ? size : 50}
    />)
}

export function Taco(props) {
    const {selected, size} = props;
    return (<Image
        priority
        src={selected ? TacoO : TacoGray}
        width={size ? size : 50}
        height={size ? size : 50}
    />)
}

export function Tulip(props) {
    const {selected, size} = props;
    return (<Image
        priority
        src={selected ? TulipO : TulipGray}
        width={size ? size : 50}
        height={size ? size : 50}
    />)
}

export function Unicorn(props) {
    const {selected, size} = props;
    return (<Image
        priority
        src={selected ? UnicornO : UnicornGray}
        width={size ? size : 50}
        height={size ? size : 50}
    />)
}

export default function RandomIcon(props) {

    const {selected, size} = props;

    const iconsSelected   = [<Eggplant key={1} selected={true} size={size}/>,   <Bear key={2} selected={true} size={size}/>,  <Devil key={3} selected={true} size={size}/>,   <Heart key={4} selected={true} size={size}/>,   <Peach key={5} selected={true} size={size}/>,   <Tulip key={6} selected={true} size={size}/>,   <Taco key={7} selected={true} size={size}/>]
    const iconsUnSelected = [<Eggplant key={1} selected={false} size={size}/>,  <Bear key={2} selected={false} size={size}/>, <Devil key={3} selected={false} size={size}/>,  <Heart key={4} selected={false} size={size}/>,  <Peach key={5} selected={false} size={size}/>,  <Tulip key={6} selected={false} size={size}/>,  <Taco key={7} selected={false} size={size}/>]


    const [chosenIconIndex, setChosenIconIndex] = useState(Math.floor(Math.random() * iconsSelected.length))


    return (
        <Box sx={{alignContent: "center", padding: 1}}>
            {selected ? iconsSelected[chosenIconIndex] : iconsSelected[chosenIconIndex]}
        </Box>

    );
}