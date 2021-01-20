//     ____       __ _____  ____
//    / __ \     / // ___/ / __ \
//   / /_/ /__  / / \__ \ / /_/ /
//  / ____// /_/ / ___/ // _, _/   PixInsight JavaScript Runtime
// /_/     \____/ /____//_/ |_|    PJSR Version 1.0
// ----------------------------------------------------------------------------
// pjsr/StdCursor.jsh - Released 2020-12-12T20:55:24Z
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
 * Standard cursor shapes
 */
export const StdCursor_NoCursor = 0; // no cursor is shown
export const StdCursor_Arrow = 1; // standard arrow cursor (pointing left)
export const StdCursor_InvArrow = 2; // inverted arrow cursor (pointing right)
export const StdCursor_UpArrow = 3; // upwards arrow
export const StdCursor_DownArrow = 4; // downwards arrow
export const StdCursor_LeftArrow = 5; // leftwards arrow
export const StdCursor_RightArrow = 6; // rightwards arrow
export const StdCursor_Checkmark = 7; // checkmark (ok) cursor
export const StdCursor_Crossmark = 8; // crossmark (cancel) cursor
export const StdCursor_Accept = 9; // arrow + checkmark
export const StdCursor_Reject = 10; // arrow + crossmark
export const StdCursor_Add = 11; // arrow + plus sign
export const StdCursor_Copy = 12; // arrow + square
export const StdCursor_Cross = 13; // crosshair
export const StdCursor_Hourglass = 14; // hourglass (native Windows wait cursor)
export const StdCursor_Watch = 15; // watch (native Macintosh wait cursor)
export const StdCursor_Wait = StdCursor_Watch; // wait cursor: we like the watch! :)
export const StdCursor_ArrowWait = 16; // arrow + hourglass/watch
export const StdCursor_ArrowQuestion = 17; // arrow + question mark
export const StdCursor_IBeam = 18; // I-beam cursor (text edition)
export const StdCursor_VerticalSize = 19; // vertical resize
export const StdCursor_HorizontalSize = 20; // horizontal resize
export const StdCursor_ForwardDiagonalSize = 21; // forward diagonal resize (/)
export const StdCursor_BackwardDiagonalSize = 22; // backward diagonal resize (\)
export const StdCursor_SizeAll = 23; // resize in all directions
export const StdCursor_VerticalSplit = 24; // split vertical
export const StdCursor_HorizontalSplit = 25; // split horizontal
export const StdCursor_Hand = 26; // pointing hand cursor
export const StdCursor_PointingHand = StdCursor_Hand; // pointing hand cursor (same as Hand)
export const StdCursor_OpenHand = 27; // open hand cursor
export const StdCursor_ClosedHand = 28; // closed hand cursor
export const StdCursor_SquarePlus = 29; // plus sign into a square (used for zoom in)
export const StdCursor_SquareMinus = 30; // minus sign into a square (used for zoom out)
export const StdCursor_CirclePlus = 31; // plus sign into a circle (used for zoom in)
export const StdCursor_CircleMinus = 32; // minus sign into a circle (used for zoom out)
export const StdCursor_Forbidden = 33; // stop cursor

// ----------------------------------------------------------------------------
// EOF pjsr/StdCursor.jsh - Released 2020-12-12T20:55:24Z
