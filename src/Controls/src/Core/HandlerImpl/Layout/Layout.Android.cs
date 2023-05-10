﻿#nullable disable
using System;
using System.Collections.Generic;
using System.Text;

namespace Microsoft.Maui.Controls
{
	public partial class Layout
	{
		public static void MapInputTransparent(LayoutHandler handler, Layout layout) =>
			MapInputTransparent((ILayoutHandler)handler, layout);

		public static void MapInputTransparent(ILayoutHandler handler, Layout layout) =>
			layout.UpdateDescendantInputTransparent();

		static void MapInputTransparent(IViewHandler handler, IView view)
		{
			if (handler is ILayoutHandler layoutHandler && view is Layout layout)
			{
				if (layoutHandler.PlatformView is LayoutViewGroup layoutViewGroup)
				{
					// Handle input transparent for this view
					layoutViewGroup.InputTransparent = layout.InputTransparent;
				}

				layout.UpdateDescendantInputTransparent();
			}
			else
			{
				ControlsVisualElementMapper.UpdateProperty(handler, view, nameof(IView.InputTransparent));
			}
		}
	}
}
