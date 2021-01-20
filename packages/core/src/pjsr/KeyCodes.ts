//     ____       __ _____  ____
//    / __ \     / // ___/ / __ \
//   / /_/ /__  / / \__ \ / /_/ /
//  / ____// /_/ / ___/ // _, _/   PixInsight JavaScript Runtime
// /_/     \____/ /____//_/ |_|    PJSR Version 1.0
// ----------------------------------------------------------------------------
// pjsr/KeyCodes.jsh - Released 2020-12-12T20:55:24Z
// ----------------------------------------------------------------------------
// This file is part of the PixInsight JavaScript Runtime (PJSR).
// PJSR is an ECMA-262-5 compliant framework for development of scripts on the
// PixInsight platform.
//
// Copyright (c) 2003-2020 Pleiades Astrophoto S.L. All Rights Reserved.
//
// Redistribution and use in both source and binary forms, with or without
// modification, is permitted provided that the following conditions are met:
//
// 1. All redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
//
// 2. All redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in the
//    documentation and/or other materials provided with the distribution.
//
// 3. Neither the names "PixInsight" and "Pleiades Astrophoto", nor the names
//    of their contributors, may be used to endorse or promote products derived
//    from this software without specific prior written permission. For written
//    permission, please contact info@pixinsight.com.
//
// 4. All products derived from this software, in any form whatsoever, must
//    reproduce the following acknowledgment in the end-user documentation
//    and/or other materials provided with the product:
//
//    "This product is based on software from the PixInsight project, developed
//    by Pleiades Astrophoto and its contributors (https://pixinsight.com/)."
//
//    Alternatively, if that is where third-party acknowledgments normally
//    appear, this acknowledgment must be reproduced in the product itself.
//
// THIS SOFTWARE IS PROVIDED BY PLEIADES ASTROPHOTO AND ITS CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
// TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
// PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL PLEIADES ASTROPHOTO OR ITS
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
// EXEMPLARY OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, BUSINESS
// INTERRUPTION; PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; AND LOSS OF USE,
// DATA OR PROFITS) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
// ----------------------------------------------------------------------------

/*
 * Key codes on the PixInsight/PCL platform
 */
export const Key_Backspace = 0x00000008;
export const Key_Tab = 0x00000009;
export const Key_Clear = 0x0000000c;
export const Key_Return = 0x0000000d;
export const Key_Enter = 0x0000000d;
export const Key_Escape = 0x0000001b;
export const Key_Shift = 0x70000001;
export const Key_Control = 0x70000002;
export const Key_Alt = 0x70000003;
export const Key_Meta = 0x70000004;
export const Key_CapsLock = 0x70000010;
export const Key_NumLock = 0x70000020;
export const Key_ScrollLock = 0x70000030;
export const Key_Pause = 0x70000100;
export const Key_Print = 0x70000200;
export const Key_Help = 0x70000300;
export const Key_SysReq = 0x70000400;
export const Key_Left = 0x10000001;
export const Key_Up = 0x10000002;
export const Key_Right = 0x10000003;
export const Key_Down = 0x10000004;
export const Key_Insert = 0x10000010;
export const Key_Delete = 0x10000020;
export const Key_Home = 0x10000100;
export const Key_End = 0x10000200;
export const Key_PageUp = 0x10000300;
export const Key_PageDown = 0x10000400;
export const Key_F1 = 0x08000001;
export const Key_F2 = 0x08000002;
export const Key_F3 = 0x08000003;
export const Key_F4 = 0x08000004;
export const Key_F5 = 0x08000005;
export const Key_F6 = 0x08000006;
export const Key_F7 = 0x08000007;
export const Key_F8 = 0x08000008;
export const Key_F9 = 0x08000009;
export const Key_F10 = 0x0800000a;
export const Key_F11 = 0x0800000b;
export const Key_F12 = 0x0800000c;
export const Key_F13 = 0x0800000d;
export const Key_F14 = 0x0800000e;
export const Key_F15 = 0x0800000f;
export const Key_F16 = 0x08000010;
export const Key_F17 = 0x08000020;
export const Key_F18 = 0x08000030;
export const Key_F19 = 0x08000040;
export const Key_F20 = 0x08000050;
export const Key_F21 = 0x08000060;
export const Key_F22 = 0x08000070;
export const Key_F23 = 0x08000080;
export const Key_F24 = 0x08000090;
export const Key_Space = 0x00000020;
export const Key_Exclamation = 0x00000021;
export const Key_DoubleQuote = 0x00000022;
export const Key_NumberSign = 0x00000023;
export const Key_Dollar = 0x00000024;
export const Key_Percent = 0x00000025;
export const Key_Ampersand = 0x00000026;
export const Key_Apostrophe = 0x00000027;
export const Key_LeftParenthesis = 0x00000028;
export const Key_RightParenthesis = 0x00000029;
export const Key_Asterisk = 0x0000002a;
export const Key_Plus = 0x0000002b;
export const Key_Comma = 0x0000002c;
export const Key_Minus = 0x0000002d;
export const Key_Period = 0x0000002e;
export const Key_Slash = 0x0000002f;
export const Key_Zero = 0x00000030;
export const Key_One = 0x00000031;
export const Key_Two = 0x00000032;
export const Key_Three = 0x00000033;
export const Key_Four = 0x00000034;
export const Key_Five = 0x00000035;
export const Key_Six = 0x00000036;
export const Key_Seven = 0x00000037;
export const Key_Eight = 0x00000038;
export const Key_Nine = 0x00000039;
export const Key_Colon = 0x0000003a;
export const Key_Semicolon = 0x0000003b;
export const Key_Less = 0x0000003c;
export const Key_Equal = 0x0000003d;
export const Key_Greater = 0x0000003e;
export const Key_Question = 0x0000003f;
export const Key_At = 0x00000040;
export const Key_A = 0x00000041;
export const Key_B = 0x00000042;
export const Key_C = 0x00000043;
export const Key_D = 0x00000044;
export const Key_E = 0x00000045;
export const Key_F = 0x00000046;
export const Key_G = 0x00000047;
export const Key_H = 0x00000048;
export const Key_I = 0x00000049;
export const Key_J = 0x0000004a;
export const Key_K = 0x0000004b;
export const Key_L = 0x0000004c;
export const Key_M = 0x0000004d;
export const Key_N = 0x0000004e;
export const Key_O = 0x0000004f;
export const Key_P = 0x00000050;
export const Key_Q = 0x00000051;
export const Key_R = 0x00000052;
export const Key_S = 0x00000053;
export const Key_T = 0x00000054;
export const Key_U = 0x00000055;
export const Key_V = 0x00000056;
export const Key_W = 0x00000057;
export const Key_X = 0x00000058;
export const Key_Y = 0x00000059;
export const Key_Z = 0x0000005a;
export const Key_LeftBracket = 0x0000005b;
export const Key_Backslash = 0x0000005c;
export const Key_RightBracket = 0x0000005d;
export const Key_Circumflex = 0x0000005e;
export const Key_Underscore = 0x0000005f;
export const Key_LeftQuote = 0x00000060;
export const Key_LeftBrace = 0x0000007b;
export const Key_Bar = 0x0000007c;
export const Key_RightBrace = 0x0000007d;
export const Key_Tilde = 0x0000007e;
export const Key_Unknown = 0x7fffffff;

// ----------------------------------------------------------------------------
// EOF pjsr/KeyCodes.jsh - Released 2020-12-12T20:55:24Z
