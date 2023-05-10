﻿#nullable disable
using System;

namespace Microsoft.Maui.Controls
{
	public partial class Layout
	{
		public static void MapInputTransparent(LayoutHandler handler, Layout layout) =>
			MapInputTransparent((ILayoutHandler)handler, layout);

		public static void MapInputTransparent(ILayoutHandler handler, Layout layout)
		{
			if (handler.PlatformView is not Microsoft.Maui.Platform.LayoutViewGroup platformView)
			{
				return;
			}

			if (layout.CascadeInputTransparent)
			{
				// Sensitive property on NUI View was false, disabled all touch event including children
				platformView.Sensitive = !layout.InputTransparent;
				platformView.InputTransparent = false;
			}
			else
			{
				// InputTransparent property on LayoutViewGroup was false,
				// Only LayoutViewGroup event was disabled but children are allowed
				platformView.InputTransparent = layout.InputTransparent;
				platformView.Sensitive = true;
			}
		}

		static void MapInputTransparent(IViewHandler handler, IView view)
		{
			if (handler is ILayoutHandler layoutHandler && view is Layout layout)
			{
				MapInputTransparent(layoutHandler, layout);
			}
			else
			{
				ControlsVisualElementMapper.UpdateProperty(handler, view, nameof(IView.InputTransparent));
			}
		}
	}
}
