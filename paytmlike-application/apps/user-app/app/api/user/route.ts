"use client"
import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db/client";
// import {useBalance} from "@repo/store/balance"

const client = new PrismaClient();
