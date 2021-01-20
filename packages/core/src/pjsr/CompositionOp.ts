//     ____       __ _____  ____
//    / __ \     / // ___/ / __ \
//   / /_/ /__  / / \__ \ / /_/ /
//  / ____// /_/ / ___/ // _, _/   PixInsight JavaScript Runtime
// /_/     \____/ /____//_/ |_|    PJSR Version 1.0
// ----------------------------------------------------------------------------
// pjsr/CompositionOp.jsh - Released 2020-12-12T20:55:24Z
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
 * Image composition operators.
 *
 * In the definitions below, A represents a target pixel and B represents a
 * source pixel. For example, if a Graphics object is being used to paint on a
 * Bitmap object, bitmap pixels are target pixels, and any graphical elements
 * drawn using the %Graphics object are considered as source pixels.
 */

/*
 * Porter-Duff alpha composition operators.
 * See T. Porter & T. Duff, Compositing Digital Images,
 *       Computer Graphics Vol. 18, Num. 3, July 1984, pp 253-259.
 */
export const CompositionOp_Clear = 0; // clear
export const CompositionOp_Source = 1; // A
export const CompositionOp_Destination = 2; // B
export const CompositionOp_SourceOver = 3; // A over B
export const CompositionOp_DestinationOver = 4; // B over A
export const CompositionOp_SourceIn = 5; // A in B
export const CompositionOp_DestinationIn = 6; // B in A
export const CompositionOp_SourceOut = 7; // A out B
export const CompositionOp_DestinationOut = 8; // B out A
export const CompositionOp_SourceAtop = 9; // A atop B
export const CompositionOp_DestinationAtop = 10; // B atop A
export const CompositionOp_Xor = 11; // A xor B

/*
 * Additional operators supported by PixInsight Core version >= 1.7.0.702
 */
export const CompositionOp_Min = 12; // Min( A, B )
export const CompositionOp_Max = 13; // Max( A, B )
export const CompositionOp_Add = 14; // A + B
export const CompositionOp_Multiply = 15; // A * B
export const CompositionOp_Screen = 16; // ~A * ~B
export const CompositionOp_Overlay = 17; // (A > 0.5) ? ~(~(2*(A - 0.5)) * ~B) : 2*A*B
export const CompositionOp_ColorDodge = 18; // A/~B
export const CompositionOp_ColorBurn = 19; // ~(~A/B)
export const CompositionOp_HardLight = 20; // (B > 0.5) ? ~(~A * ~(2*(B - 0.5))) : A*2*B
export const CompositionOp_SoftLight = 21; // (B > 0.5) ? ~(~A * ~(B - 0.5)) : A*(B + 0.5)
export const CompositionOp_Difference = 22; // Abs( A - B )
export const CompositionOp_Exclusion = 23; // 0.5 - 2*(A - 0.5)*(B - 0.5)

// ----------------------------------------------------------------------------
// EOF pjsr/CompositionOp.jsh - Released 2020-12-12T20:55:24Z
