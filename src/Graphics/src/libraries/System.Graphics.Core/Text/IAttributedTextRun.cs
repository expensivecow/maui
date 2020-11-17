﻿namespace System.Graphics.Text
{
    public interface IAttributedTextRun
    {
        int Start { get; }
        int Length { get; }

        ITextAttributes Attributes { get; }
    }
}