type Option = {
    name: string;
    category: string;
    description: string;
    values: string;
    default: string;

  };
export const options : Option[] = [
    {
      "category": "Additive Manufacturing",
      "name": "3dp_cli_format",
      "description": "Determine CLI file format: ASCII or binary.",
      "values": "binary, ascii",
      "default": "binary"
    },
    {
      "category": "Additive Manufacturing",
      "name": "3dp_discard_empty_base_slices",
      "description": "Set this parameter to \"Yes\" to ignore any empty slices between the tray and the bottom surface of the model.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Additive Manufacturing",
      "name": "3dp_ignore_lattice_for_support",
      "description": "Use this option to ignore all lattice structures while creating the supports.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Additive Manufacturing",
      "name": "3dp_ignore_lattice_volume",
      "description": "Ignore the lattice volume for model position on the tray",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Additive Manufacturing",
      "name": "3dp_multiple_cli_files",
      "description": "Create one CLI file for the solid geometry, and a separate CLI file for each lattice structure. A CLI file will always be created separately for the support structures.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Additive Manufacturing",
      "name": "3dp_multithread_slicing",
      "description": "Use multithreaded calculation during slicing. Select from 1 (single thread) through 8 CPUs for calculation",
      "values": "1, 3, 2, 4, 5, 6, 7, 8",
      "default": "1"
    },
    {
      "category": "Additive Manufacturing",
      "name": "3dp_slice_location",
      "description": "Set the height of the slicing within each layer.",
      "values": "top, base, mid",
      "default": "base"
    },
    {
      "category": "Additive Manufacturing",
      "name": "3dp_slicing_layer_height",
      "description": "Determine the height of each layer in the slicing process, in mm.",
      "values": "",
      "default": "0.150000"
    },
    {
      "category": "Additive Manufacturing",
      "name": "3dp_slicing_set_minz_value",
      "description": "Determine at what height above the tray (in mm) the slicing operation begins.",
      "values": "",
      "default": "0.000000"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_3mf_lattice_ext",
      "description": "Use the 3MF Lattice extension for applicable lattice structures. To benefit from this extension, convert your lattice features to simplified representation.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_bound_offset",
      "description": "Sets the default offset from the tray box in all directions when placing models using auto-position or nesting (5.0 is set as algorithm default value)",
      "values": "",
      "default": "5.000000"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_enable_tooltips",
      "description": "Show tooltips with information about materials, when hovering over a component.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_floor_offset",
      "description": "Defines the default height offset from the tray floor, in mm, when placing models using auto-position or nesting.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_load_printers_dir",
      "description": "Set the path to directory containing list of user-defined 3D printers.",
      "values": "",
      "default": ""
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_material_lib_path",
      "description": "Sets the default directory for 3D Printing part material library. Use full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_min_gap_color",
      "description": "Specifies the color that narrow gaps are highlighted",
      "values": "",
      "default": "255 160 255"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_min_gap_tolerance",
      "description": "Tolerance for gap analysis",
      "values": "",
      "default": "0.020000"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_min_gap_width",
      "description": "Minimum acceptable gap for gap analysis",
      "values": "",
      "default": "0.200000"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_min_wall_color",
      "description": "Specifies the color that thin walls are highlighted",
      "values": "",
      "default": "255 160"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_min_wall_tolerance",
      "description": "Tolerance for wall analysis",
      "values": "",
      "default": "0.070000"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_min_wall_width",
      "description": "Minimum acceptable wall thickness for wall analysis",
      "values": "",
      "default": "0.700000"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_offline_materials_dir",
      "description": "The root directory for 3D printing mateirals offline data.",
      "values": "",
      "default": ""
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_offline_materials_use",
      "description": "Use 3D printing materials offline data.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_stl_allow_negative_vals",
      "description": "Allow negative values in the STL file format",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_stl_export_angle",
      "description": "Angle control default value for STL export",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_stl_export_chord_height",
      "description": "Chord height default value for STL export",
      "values": "",
      "default": "0.000000"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_stl_export_multibody",
      "description": "If the design model contains multiple bodies, a separate STL file will be exported for each body. A .zip file will be created.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_stl_export_separately",
      "description": "Choose this option to export the models body, lattice, and support structure separately for printability purposes.  A .zip file will be created.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_stl_export_step_size",
      "description": "Step size default value for STL export (-1.0 to use algorithm default)",
      "values": "",
      "default": "-1.000000"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_stl_export_type",
      "description": "Specifies the format of the exported STL file",
      "values": "binary, ascii",
      "default": "binary"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_stl_prop_chord_height",
      "description": "Use maximum chord heights proportional to component sizes.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_stl_prop_step_size",
      "description": "Use maximum step sizes proportional to component sizes.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_stl_ud_angle",
      "description": "Use angle from the configuration dialog, rather than default.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_stl_ud_chord_height",
      "description": "Use chord height from the configuration dialog, rather than default.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_stl_ud_step_size",
      "description": "Use step size from the configuration dialog, rather than default.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_x_placement_offset",
      "description": "Sets the default offset from models in X direction when placing models using auto-position or nesting (5.0 is set as algorithm default value)",
      "values": "",
      "default": "5.000000"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_y_placement_offset",
      "description": "Sets the default offset from models in Y direction when placing models using auto-position or nesting (5.0 is set as algorithm default value)",
      "values": "",
      "default": "5.000000"
    },
    {
      "category": "Additive Manufacturing",
      "name": "print3d_z_placement_offset",
      "description": "Sets the default offset from models in Z direction when placing models using auto-position or nesting (5.0 is set as algorithm default value)",
      "values": "",
      "default": "5.000000"
    },
    {
      "category": "Application Programming Interfaces",
      "name": "add_java_class_path",
      "description": "Prepends the option value on the java environment variable, CLASSPATH, used to find classes in J-Link programs. To specify multiple search paths in the same line, delimit them using ':' on UNIX, and ';' on Windows NT.",
      "values": "",
      "default": ""
    },
    {
      "category": "Application Programming Interfaces",
      "name": "enable_protk_xml_schema",
      "description": "Enables XML-Schema validation for Pro/TK feature XMLs",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Application Programming Interfaces",
      "name": "jlink_java2",
      "description": "Option to force use of Java-2 JRE command line (\"java\" instead of \"jre\")",
      "values": "off, on",
      "default": "on"
    },
    {
      "category": "Application Programming Interfaces",
      "name": "prodevdat",
      "description": "Specify the full path to an additional Toolkit registry file.",
      "values": "",
      "default": ""
    },
    {
      "category": "Application Programming Interfaces",
      "name": "protkdat",
      "description": "Specify the full path to an additional Toolkit registry file.",
      "values": "",
      "default": ""
    },
    {
      "category": "Application Programming Interfaces",
      "name": "toolkit_registry_file",
      "description": "Specify the full path to an additional Toolkit registry file.",
      "values": "",
      "default": ""
    },
    {
      "category": "Application Programming Interfaces",
      "name": "web_disable_js_command",
      "description": "Enter a specific javascript command to be disabled",
      "values": "",
      "default": ""
    },
    {
      "category": "Application Programming Interfaces",
      "name": "web_link_file_read",
      "description": "Sets Pro/Web.Link permission to read data from the local file system.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Application Programming Interfaces",
      "name": "web_link_file_write",
      "description": "Sets Pro/Web.Link permission to write data to the local file system.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Application Programming Interfaces",
      "name": "web_link_proe_read",
      "description": "Sets Pro/Web.Link permission to read data from a Creo session.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Application Programming Interfaces",
      "name": "web_link_proe_write",
      "description": "Sets Pro/Web.Link permission to modify data in a Creo session.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Application Programming Interfaces",
      "name": "web_link_security_autoprompt",
      "description": "Yes - The Security dialog box is displayed when a Pro/Web.Link function requires security access beyond the current settings.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "add_merge_ent_to_rulbased_layer",
      "description": "Should merge feature put copied items in target model on layer driven by rule.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "add_offset_to_constraint_comp",
      "description": "Adds an offset dimensions to constraints that were created without an offset during the dragging of a component.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "advanced_intersection",
      "description": "Control the appearance of the intersection tool and scope of available functionalities.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "allow_freeze_failed_assy_comp",
      "description": "Allow freezing failed assembly components.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "allow_package_children",
      "description": "Sets what type of children packaged components can have. ALL - Features and components can be a children of packaged component. FEAT - Only features can be children of packaged components. NONE - Packaged components cannot have children.",
      "values": "all, feat, none",
      "default": "all"
    },
    {
      "category": "Assembly",
      "name": "allow_redo_intersections",
      "description": "Yes - Displays the ReIntersect command in the ASSY FEAT menu.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "allow_save_as_instance",
      "description": "Allows the option to save a copy of the active model as a family table instance.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "allow_save_failed_model",
      "description": "Yes - Failed models can be saved. No - Failed models cannot be saved. Prompt - Let the user decide whether failed models can be saved.",
      "values": "yes, no, prompt",
      "default": "prompt"
    },
    {
      "category": "Assembly",
      "name": "allow_update_part_simp_rep_data",
      "description": "Allow updating part Simplified Rep data in session automatically when switching from one Simp Rep to another.  Yes - Allow updating part simplified rep data. No - Do not update part simplified rep data. Prompt - Prompt the user if the current simplified rep should be updated.",
      "values": "yes, no, prompt",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "auto_assembly_with_notebooks",
      "description": "Yes - Enables automatic assembly. No - Disables automatic assembly.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "auto_constr_always_use_offset",
      "description": "Control whether auto constraint should create offsets. Yes - Auto constraint alw ays creates offsets. No - Auto constraint snaps align or mate if surfaces are wi thin tolerance. Never - Auto constraint never create offsets.",
      "values": "yes, no, never",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "auto_evaluate_simprep_rules",
      "description": "If the option is \"yes\" newly created rep would be updated each time on   retrieve/regeneration.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "auto_locate_in_tree",
      "description": "Automatically expand the tree to locate selected object or use a command to do so.",
      "values": "yes, no, model_tree, design_tree",
      "default": ""
    },
    {
      "category": "Assembly",
      "name": "auto_place_max_number",
      "description": "Set the default value for the maximum number of matches allowed.",
      "values": "",
      "default": "5"
    },
    {
      "category": "Assembly",
      "name": "auto_update_intersected_models",
      "description": "Control the appearance of the intersection tool and scope of available functionalities.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "autoplace_single_comp",
      "description": "Assembling components with an interface will automatically place the component at the first position satisfying the interface definitions.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "boolean_associative_placement",
      "description": "Yes - Update the resulting Boolean feature according to the placement of the modifying component in boolean operations. No - Don't consider component placement.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "boolean_copy_datums",
      "description": "Yes - Copy Datum planes to the modified model as a part of boolean operation. No - Don't copy datum planes.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "boolean_copy_quilts",
      "description": "Yes - Copy Quilts to the modified model as a part of boolean operation. No - Don't copy quilts.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "boolean_default_operation",
      "description": "Sets the default Boolean operation for models.Values: add_Bodies,merge,cut,intersect,model_type. When set to \"model_type\" the default Boolean operation will depend on the type of the model: if invoked in Assembly-use Merge, if invoked in Part-use Add Bodies.",
      "values": "intersect, model_type, add_bodies, merge, cut",
      "default": "model_type"
    },
    {
      "category": "Assembly",
      "name": "boolean_discard_modifying",
      "description": "Yes - Delete modifying components after Boolean operations. No - Keep modifying components.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "boolean_transfer_refs",
      "description": "Yes - Transfer all the references from the modifying component to the resulting boolean feature. No - Don't transfer references.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "bump_revnum_on_retr_regen",
      "description": "Determines whether or not revision number is increased for generic models that regenerate and change during assembly retrieval.  Only applies if new_asm_regen_revnums is yes (otherwise, there will be no revision number bumping).",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "can_snap_to_missing_ref",
      "description": "Controls whether to enable snapping to missing references while dragging components for placement. Yes - Snapping is enabled while dragging. No - Snapping is disabled while dragging.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "check_interface_criteria",
      "description": "Check for interfaces when placing a component.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "check_interference_of_matches",
      "description": "Show only matches that do not interfere with other components.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "check_same_assy_parts",
      "description": "Determines whether to permit different names for different part occurrences, or not in mirror subassembly UI.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "chooser_size_filter_default",
      "description": "Sets the size filter default value as a percentage of the overall assembly size",
      "values": "",
      "default": ""
    },
    {
      "category": "Assembly",
      "name": "comp_angle_offset_eps",
      "description": "Specifies the angle epsilon such that if the desired surfaces are equal or greater than the epsilon (in degrees), than an angle offset constraint will be created.",
      "values": "",
      "default": "10.000000"
    },
    {
      "category": "Assembly",
      "name": "comp_assemble_start",
      "description": "Sets the initial assembly placement behavior when assembling a new component. Default - Default initial position.  Package - Define initial position using the Move option.  Constraint_in_Window - Use secondary window.   Move_then_Place - Define initial position using the Move option and then  define placement constraints.",
      "values": "package, constrain_in_window, default, move_then_place",
      "default": "default"
    },
    {
      "category": "Assembly",
      "name": "comp_placement_assumptions",
      "description": "Use placement assumptions when placing components.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "comp_retr_angular_increment",
      "description": "Sets the accuracy for the selection of external components based on graphic computation.",
      "values": "",
      "default": "1"
    },
    {
      "category": "Assembly",
      "name": "comp_rollback_on_redef",
      "description": "No - Assembly is not rolled back when the user redefines a component.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "copy_geom_update_pre_2000i_dep",
      "description": "Yes - Flags independent copy geom features in a pre-2000i model as modified when retrieved into Creo. Save the model immediately to update the model's copy geom dependency information.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Assembly",
      "name": "copy_geometry_method",
      "description": "Sets the default copy geometry reference(s) type",
      "values": "publish_geometry, references",
      "default": "publish_geometry"
    },
    {
      "category": "Assembly",
      "name": "create_temp_interfaces",
      "description": "Allow the automatic creation of interfaces based on previous assembly instructions.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "dim_inactive_components",
      "description": "Display inactive assembly components using phantom transparency and default color (grey). Default value is shade_only.",
      "values": "never, always, shaded_only",
      "default": "shaded_only"
    },
    {
      "category": "Assembly",
      "name": "disp_regen_success_msg",
      "description": "Issue successfull regeneration messages for assembly models.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "enable_advance_collision",
      "description": "Enables advance collision settings usage.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "enable_creo_simulation_live",
      "description": "Yes (default) - Enable Creo Simulation Live. No - Disable Creo Simulation Live.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "enable_dragdrop_on_components",
      "description": "ALL - Allows users to perform component and feature reorder and restructure via drag & drop. Reorder - Allows users to perform component and feature reorder via drag & drop. The Restructure operation is prohibited.",
      "values": "all, reorder",
      "default": "all"
    },
    {
      "category": "Assembly",
      "name": "enable_implied_joints",
      "description": "Allow underconstrained components as mechanism connections.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "enable_insep_asm_operations",
      "description": "Expose all inseparable assemblies operations like \"Embed\", \"Extract\", \"Create Embedded\".",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "enable_multi_material_model",
      "description": "Enable user assignment of materials to bodies.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "erv_show_external_only",
      "description": "Yes - Global Reference Viewer will show objects with external references only;  No - all the objects will be visible",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "fail_ref_copy_when_missing_orig",
      "description": "Yes - When using a copied geom feature or a backed-up external reference with the Design Manager, and the reference is missing in the original, then the copied geom feature fails. No - The feature freezes and does not update.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "find_with_off_csys_pnt_names",
      "description": "Set to yes to be able to search by Point feature created with Offset Coordinate System option, using names of its points.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "fix_refs_to_intersections",
      "description": "Sets remnant removal ability for the ReIntersect command in the ASSY FEAT menu. Yes - You can remove remnants. No - You cannot remove remnants.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "force_upd_assem_mp_in_simp_rep",
      "description": "Update mass properties parameters even when some of the components of the assembly are not in master rep.",
      "values": "yes, no, use_stored",
      "default": "use_stored"
    },
    {
      "category": "Assembly",
      "name": "grv_default_view",
      "description": "Sets the default view the reference view starts with - Dependencies or References.",
      "values": "references, dependencies",
      "default": "references"
    },
    {
      "category": "Assembly",
      "name": "ignore_non_displayed_items",
      "description": "Ignores nondisplayed items when searching the component interface during component placement.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "include_sub_model_interfaces",
      "description": "Includes sub model interfaces as possible references for interface to interface component placement.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "interface_criteria_mismatch",
      "description": "FAIL_PLACEMENT - Fail regeneration upon component interface criteria mismatch. WARNING_ONLY - A warning message is given during regeneration for the criteria mismatch only without failure. IGNORE - Interface criteria mismatch ignored during regeneration.",
      "values": "ignore, warning_only, fail_placement",
      "default": "warning_only"
    },
    {
      "category": "Assembly",
      "name": "modify_offset_during_comp_drag",
      "description": "Enables the modification of the value of offset dimensions during component dragging.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "mp_dens_ft_column_mtrl_assigned",
      "description": "Yes - Allows adding an MP_DENSITY column in FT when a material is assigned to a model. When set may cause the same material to have different values for the Density parameter in different instances. Does not affect legacy models.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "mtrl_convert_units",
      "description": "If set to \"Yes\" Creo will automatically convert units in materials from a library to the model system of units.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "new_wf5_simp_rep_ui",
      "description": "Yes - Use Component Chooser base Simp Rep UI, No - Use old Simp Rep definition UI.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "package_constraints",
      "description": "Action to take for packaged components in Assembly mode. Update - Updates components if assembly changes. Freeze - Does not move components if assembly changes. Disallow - Does not allow packaged components in assembly (must be fully constrained).",
      "values": "disallow, freeze, update",
      "default": "update"
    },
    {
      "category": "Assembly",
      "name": "package_ref_alert",
      "description": "Control whether alert dialog is given when packaged component is referenced. Yes - Allow alert when a packaged component is referenced. No -  No Alert is given when a packaged component is referenced.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "preserve_comp_color_in_preview",
      "description": "Yes - During component placement, component being assembled will retain its normal colors.  No - During component placement, component being assembled is shown in preview color.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "regen_notebook_w_assem",
      "description": "Specifies whether or not the notebook will be automatically regenerated upon assembly regeneration.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "replace_comp_name_method",
      "description": "Sets the naming convention used when replacing components.",
      "values": "transfer, remove, preserve",
      "default": "transfer"
    },
    {
      "category": "Assembly",
      "name": "replace_history_rule_order",
      "description": "Set the default order of the history evaluation rule in the replace operation. Disable - the evaluation rule will be disabled by default. Number - set the order of the rule relative to other evaluation rules.",
      "values": "1, 3, 2, disable, 4, 5",
      "default": "3"
    },
    {
      "category": "Assembly",
      "name": "replace_interface_rule_order",
      "description": "Set the default order of the interface evaluation rule in the replace operation. Disable - the evaluation rule will be disabled by default. Number - set the order of the rule relative to other evaluation rules.",
      "values": "1, 3, 2, disable, 4, 5",
      "default": "1"
    },
    {
      "category": "Assembly",
      "name": "replace_sameid_rule_order",
      "description": "Set the default order of the same id evaluation rule in the replace operation. Disable - the evaluation rule will be disabled by default. Number - set the order of the rule relative to other evaluation rules.",
      "values": "1, 3, 2, disable, 4, 5",
      "default": "5"
    },
    {
      "category": "Assembly",
      "name": "replace_samename_rule_order",
      "description": "Set the default order of the same name evaluation rule in the replace operation. Disable - the evaluation rule will be disabled by default. Number - set the order of the rule relative to other evaluation rules.",
      "values": "1, 3, 2, disable, 4, 5",
      "default": "2"
    },
    {
      "category": "Assembly",
      "name": "replace_sameparam_rule_order",
      "description": "Set the default order of the same parameters evaluation rule in the replace operation. Disable - the evaluation rule will be disabled by default. Number - set the order of the rule relative to other evaluation rules.",
      "values": "1, 3, 2, disable, 4, 5",
      "default": "4"
    },
    {
      "category": "Assembly",
      "name": "replace_unrelated_automatic",
      "description": "Availability of automatic reference pairing in unrelated replace. No - Automatic reference pairing is not available. Yes - Automatic reference pairing is available.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "retrieve_instance_dependencies",
      "description": "Determines whether to retrieve the dependencies of the generic when an instance is retrieved.",
      "values": "instance_deps_only, instance_and_generic_deps, instance_req_generic",
      "default": "instance_req_generic"
    },
    {
      "category": "Assembly",
      "name": "rv_current_object",
      "description": "Will control default option when setting a model or component as the current object.",
      "values": "model, component, component + model",
      "default": "component + model"
    },
    {
      "category": "Assembly",
      "name": "rv_search_scope",
      "description": "Sets the search scope for children when entering the reference viewer. Session - Search all objects in session. Window - Search objects in the active window only.",
      "values": "session, window",
      "default": "session"
    },
    {
      "category": "Assembly",
      "name": "search_area_for_comp_interfaces",
      "description": "Defines the search area for the component interface as a percentage of the component size during component placement.",
      "values": "",
      "default": "100"
    },
    {
      "category": "Assembly",
      "name": "search_not_retrieved_models",
      "description": "Expands search to include models that have not been retrieved into session. If Yes, models will be brought into session possibly causing performance issues.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "sel_insts_on_comp_retrieval",
      "description": "Yes - If the components used in the assembly instances are themselves generics, the systems asks if you want to choose an instance as each component is retrieved. No - The generic model of the component is retrieved automatically.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "show_interference_in_sections",
      "description": "Yes - Interference will be shown automatically, No - interference will not be shown automatically.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "shrinkwrap_alert",
      "description": "Displays the Shrinkwrap alert the first time the quality level is increased.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "simple_search_consider_select",
      "description": "Defines whether simple search executes query only inside selected models (if some models selected) or always in scope of entire top-level model.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "simprep_default_model_status",
      "description": "Determines the default model status while defining a new simplified rep.",
      "values": "automatic, master, geometry, exclude, graphics, light graphics rep",
      "default": "exclude"
    },
    {
      "category": "Assembly",
      "name": "simprep_ondemand_selection",
      "description": "Determines the rep to be retrieved when selecting a reference. Automatic  Retrieves the minimum rep required to perform the operation.",
      "values": "automatic, master, disable",
      "default": "automatic"
    },
    {
      "category": "Assembly",
      "name": "simprep_ondemand_settings",
      "description": "Determines on-demand retrieval behavior in simplified representation views. Prompt - Ask for confirmation before retrieving on-demand. Never_prompt - Retrieve models on-demand automatically with no confirmation. Disabled - on demand is disabled.",
      "values": "prompt, disable, never_prompt",
      "default": "never_prompt"
    },
    {
      "category": "Assembly",
      "name": "skeleton_model_default_color",
      "description": "Specifies the color Creo uses to display new skeleton models. The three decimal values ranging from 0 through 100 specify (in order) the percentages of red, green, and blue in the resulting color. For example, 0 0 49 specifies medium blue.",
      "values": "",
      "default": "0.000000 75.000000 100.000000"
    },
    {
      "category": "Assembly",
      "name": "snap_to_constraints_during_drag",
      "description": "Enables the dynamic snapping to constraints during the dragging of components.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "update_copy_geom_location",
      "description": "Yes-Copy Geometry will try to update location of copied geometry based on changes to component placements even if some components are excluded or in graphics rep.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "update_rep_refs",
      "description": "\"Yes\" updates top assembly simplified reps for replacements during regeneration and upon replacement.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "use_3d_thumbnail_in_lwg_rep",
      "description": "Control the usage of 3D thumbnails when retrieving in light weight graphic representation",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly",
      "name": "use_active_model_in_transform",
      "description": "Transform analysis default behavior: use active model CSYS and units or not.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Assembly",
      "name": "visible_annotations_scope",
      "description": "Specify whether sub-model annotations will be visible in assemblies.  If set to \"Active model only\", only annotations of the active model will be visible.  If set to \"All\", all annotations in sub-models will also be displayed. Annotation display in part mode is not affected.",
      "values": "all, active model only",
      "default": "active model only"
    },
    {
      "category": "Assembly Process",
      "name": "curr_proc_comp_def_color",
      "description": "Specifies the default color used to display the current component in a process assembly.",
      "values": "",
      "default": "0.000000 0.000000 0.000000"
    },
    {
      "category": "Assembly Process",
      "name": "curr_proc_comp_def_font",
      "description": "Specifies the default font used on the current component in a process assembly.",
      "values": "",
      "default": ""
    },
    {
      "category": "Assembly Process",
      "name": "display_comps_to_assemble",
      "description": "Yes - The design model goes into memory and displays. Pick process components from the design model or the Model Tree. No - Only the Model Tree displays. As you pick process components from the Model Tree, they go into memory.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Assembly Process",
      "name": "offset_line_def_color",
      "description": "Specifies the color that offset lines are displayed in drawings.",
      "values": "",
      "default": "0.000000 0.000000 0.000000"
    },
    {
      "category": "Assembly Process",
      "name": "offset_line_def_font",
      "description": "Specifies the font in which offset lines are displayed in drawings.",
      "values": "",
      "default": ""
    },
    {
      "category": "Assembly Process",
      "name": "prev_proc_comp_def_color",
      "description": "Specify the default color for components added to a process assembly in a previous step.",
      "values": "",
      "default": "0.000000 0.000000 0.000000"
    },
    {
      "category": "Assembly Process",
      "name": "prev_proc_comp_def_font",
      "description": "Specify the default font for previously added components in a process assembly.",
      "values": "",
      "default": ""
    },
    {
      "category": "Casting & Mold Design",
      "name": "allow_shrink_dim_before",
      "description": "Allow calculation before relations.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Casting & Mold Design",
      "name": "default_mold_base_vendor",
      "description": "Default Value for Mold Base vendor.",
      "values": "futaba_mm, dme, hasco, dme_mm, hasco_mm",
      "default": ""
    },
    {
      "category": "Casting & Mold Design",
      "name": "default_shrink_formula",
      "description": "Default option of shrinkage formula: 1/(1-S) - ASME standard or 1+S (simple).",
      "values": "asme, simple",
      "default": "simple"
    },
    {
      "category": "Casting & Mold Design",
      "name": "max_thickness_slices",
      "description": "Maximum number of slices in model thickness analysis.",
      "values": "",
      "default": "100"
    },
    {
      "category": "Casting & Mold Design",
      "name": "mold_layout_origin_name",
      "description": "Sets a specified coordinate system as the default for the cavity layout origin.",
      "values": "",
      "default": ""
    },
    {
      "category": "Casting & Mold Design",
      "name": "mold_vol_surf_no_auto_rollback",
      "description": "Do not perform automatic rollback while modifying mold volumes or parting surfaces.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Casting & Mold Design",
      "name": "pro_catalog_dir",
      "description": "Sets the path to the catalog directory containing the catalog menu and the names of other catalog files, such as ejector pins. For example: pro_catalog_dir proe_loadpoint/apps_data/mold_data/catalog. Use full path name to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Casting & Mold Design",
      "name": "pro_cav_lay_rule_dir",
      "description": "Sets the default directory for cavity layout rules. Use the full path name to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Casting & Mold Design",
      "name": "shrinkage_value_display",
      "description": "Determines how dimensions are displayed when shrinkage is applied to a model with Pro/MOLDESIGN. Percent_shrink - Dimensions appear with the shrinkage percent.",
      "values": "final_value, percent_shrink",
      "default": "percent_shrink"
    },
    {
      "category": "Colors",
      "name": "color",
      "description": "Turns the colors on or off. Turning colors off displays the model wireframe in white.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Colors",
      "name": "color_ramp_size",
      "description": "Specifies the number of shades in a color ramp. Applicable to multi-color, shaded model displays of simulation / analysis results. System graphics must support 256 colors and color maps that compress.",
      "values": "",
      "default": "-1"
    },
    {
      "category": "Colors",
      "name": "color_resolution",
      "description": "Specifies minimum allowable deviation between user-defined colors. Colors having RGB values within tolerance of existing colors cannot be created. Decreasing this setting allows more colors that are very similar in RGB value to be defined.",
      "values": "",
      "default": "0.100000"
    },
    {
      "category": "Colors",
      "name": "global_appearance_file",
      "description": "Material Global Appearance file path.",
      "values": "",
      "default": ""
    },
    {
      "category": "Colors",
      "name": "lighting_display_for_analysis",
      "description": "Use Lighting color scheme for analyses display.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Colors",
      "name": "mat_assign_appearance",
      "description": "Control whether default appearance in material definition is automatically assigned to a part.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Colors",
      "name": "number_user_colors",
      "description": "Specifies the maximum number of different wireframe colors that can display in the graphics area(s) at any given moment.",
      "values": "",
      "default": "-1"
    },
    {
      "category": "Colors",
      "name": "pro_colormap_path",
      "description": "Specifies the directory path for a color map (.map) file to be loaded from disk. Use the full path name to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Colors",
      "name": "reflection_analysis_display",
      "description": "Black and White displays reflection as black and white stripes. Surface color - uses the surface color to represent reflection stripes.",
      "values": "black and white, surface color",
      "default": "black and white"
    },
    {
      "category": "Colors",
      "name": "suppress_appearance_message",
      "description": "Suppress the Lightworks appearance conversion notification dialog.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Colors",
      "name": "system_colors_file",
      "description": "Specifies the system color file. Use the full path name to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Colors",
      "name": "use_part_color_for_hidden_lines",
      "description": "Determines how to color the hidden lines of parts that have user defined colors. \"YES\" - Use the dimmed part color for hidden lines.  SYSTEM_HIDDEN_COLOR is ignored if it has been specified.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Combination States",
      "name": "combined_state_type",
      "description": "Defines how a newly created combination state controls the visibility of annotations and supplemental geometry.  Mbd - visibility of annotations and supplemental geometry is controlled by combination state.  Semi_mbd - visibility of annotations is controlled by combination state; visibility of supplemental geometry is controlled by layers.  Nonmbd - visibility of annotations and supplemental geometry is controlled by layers.",
      "values": "mbd, semi_mbd, non_mbd",
      "default": "semi_mbd"
    },
    {
      "category": "Combination States",
      "name": "convert_inheritance_annotations",
      "description": "Verifies and restores missing annotations to their original combination states in erased display.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Combination States",
      "name": "legacy_comb_convert_type",
      "description": "Controls the visibility of axes when you assign the axes to a model in Creo Parametric 3.0 and earlier, and open the same model in Creo Parametric 6.0 and later.",
      "values": "auto, semi_mbd",
      "default": "semi_mbd"
    },
    {
      "category": "Creo Simulate",
      "name": "ansys_shell181_integ_method",
      "description": "Sets the integration method used for Ansys SHELL181. reduced - uses uniform reduced integration. full - uses full integration. Default is full.",
      "values": "full, reduced",
      "default": "full"
    },
    {
      "category": "Creo Simulate",
      "name": "creo_ansys_all_results_visible",
      "description": "Defines if advanced result types, like various strains, are visible by default.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "creo_ansys_contact_gap_behavior",
      "description": "Warn about gaps or overlaps at contacts before solving.",
      "values": "warn, fix, allow",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "creo_ansys_large_deflection",
      "description": "Always assume large deflection in the solver calculations.",
      "values": "off, on",
      "default": "off"
    },
    {
      "category": "Creo Simulate",
      "name": "creo_ansys_n-r_method",
      "description": "Allow the best method to be selected automatically.",
      "values": "modified, automatic, full, initial_stiffness, unsymmetrical",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "creo_ansys_normal_modes",
      "description": "Specify the number of required natural frequencies for the modal solution.",
      "values": "",
      "default": "6"
    },
    {
      "category": "Creo Simulate",
      "name": "creo_ansys_solver_cores",
      "description": "Set the number of processor cores to be used by Creo Ansys solver. Currently supports 1-4 cores.",
      "values": "",
      "default": "2"
    },
    {
      "category": "Creo Simulate",
      "name": "creo_ansys_solver_type",
      "description": "Allow the most appropriate solver to be automatically selected for your model.",
      "values": "automatic, iterative, direct, supernode, subspace",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "custom_rainbow",
      "description": "Used to specify fringe colors in Pro/FEM-POST results. Specify blue, black, cyan, magenta, green, yellow, red, and white. Enter colors as a dash-delimited string (lowest to highest value). The default is blue-cyan-green-yellow-red-magenta-white.",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "enclosure_volume_transparency",
      "description": "Controls the enclosure volume transparency in shaded model display. You can change the value in the range between 0.0 and 1.0. The bigger the value, the more transparent the enclosure volume. The default value is 0.92.",
      "values": "",
      "default": "0.920000"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_allow_named_mesh_files",
      "description": "Yes - The user will be prompted to select a file to retrieve the mesh from, or enter a file name to save the mesh to. No - The user will not be prompted to select or enter a mesh file name.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_ansys_annotations",
      "description": "Toggle transfer of load set names to ANSYS.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_ansys_grouping",
      "description": "Toggle transfer of groups/layers to ANSYS.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_asp_ratio",
      "description": "The value that FEM created elements of aspect ratio are compared against.",
      "values": "",
      "default": "7.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_default_solver",
      "description": "Specify the default solver to be used in FEM mode.",
      "values": "ansys, nastran, nei_nastran",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "fem_dist_index",
      "description": "The value that FEM created elements of distortion indices are compared against.",
      "values": "",
      "default": "0.400000"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_edge_angle",
      "description": "Sets the minimum acceptable default angle between adjacent element edges. Enter value between 0 and 90.",
      "values": "",
      "default": "30.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_hierarchical_mesh",
      "description": "Yes - Store and retrieve automatically the FEM mesh in the mesh file upon its creation and on entering Creo Simulate, respectively. This option triggers Hierarchical Mesh mode. No (default) - Do not store or retrieve the FEM Mesh automatically.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_inertia_relief",
      "description": "Enable inertia relief in FEM mode. Creo Simulate will output PARAM,INREL,-2 to a Nastran deck file or XYZ to ANSYS PREP7 file.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_keep_solver_files",
      "description": "Yes - All Solver files will be retained after running the analysis. No - All Solver files will be deleted after running the analysis.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_mesh_auto_retrieve",
      "description": "Yes - The FEM mesh will automatically be retrieved from the current working directory on entering Creo Simulate. No - The mesh will not be retrieved automatically. The default is NO.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_mesh_auto_save",
      "description": "Yes - The FEM mesh will be saved in the current working directory after it is created. No - The mesh will not be saved automatically after it is created. The default value is No.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_mesh_link_solid_shell",
      "description": "Controls the default setting of the Create Solid-Shell Links check box on the FEM Mesh Settings dialog box. By default this option is set to YES, and the check box is selected.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_mesh_operations",
      "description": "Yes - The menu item Operations appears in the FEM MESH menu, providing access to functionalities to manipulate the finite element mesh. No - the menu FEM MESH will not have the item Operations.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_mid_ratio",
      "description": "The value that FEM created elements of mid ratios are compared against.",
      "values": "",
      "default": "0.100000"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_neutral_version",
      "description": "Specify the version number of neutral file.",
      "values": "",
      "default": "3"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_output_rigid_link_as_rbar",
      "description": "Yes - Generate individual element for each pair of independent node and dependent node. Nastran output creates multiple RBAR cards. No - Generate a single element between the independent node and all dependent nodes. Nastran output creates a single RBE2 card.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_preserve_mesh",
      "description": "Yes - Issue a warning whenever the current operation invalidates the existing FEM mesh. No (default) - Erase the mesh without notification when it becomes incompatible with the model.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_shell_elem_type",
      "description": "Sets the default shell element type in FEM mode.",
      "values": "tri, quad",
      "default": "quad"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_skew_angle",
      "description": "Sets the maximum acceptable default skew angle value, measured in degrees. Enter a value between 0 and 90.",
      "values": "",
      "default": "45.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_solver_time_limit",
      "description": "Interrupt the Nastran solver after the specified time limit in minutes using the TIME executive card. A negative number directs the solver to use its own default. The default value of this option is -1.",
      "values": "",
      "default": "-1"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_taper",
      "description": "Sets the minimum acceptable default taper value. Enter a value between 0 and 1.",
      "values": "",
      "default": "0.500000"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_warp_angle",
      "description": "Sets the maximum acceptable default warp angle value, measured in degrees. Enter a value between 0 and 90.",
      "values": "",
      "default": "10.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "fem_which_ansys_solver",
      "description": "Specifies the ANSYS equation solver type to be used. Supported solver types: FRONTAL, ITERATIVE (JCG), POWERSOLVER (PCG), ICCG, AUTO, and SPARSE.",
      "values": "frontal, iterative, powersolver, auto, iccg, sparse",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "fem_y_dir_compress",
      "description": "Specifies the Y-direction based on compressed and uncompressed geometry. The default value is uncompressed.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "pro_ansys_path",
      "description": "Specify the path to ANSYS executable.",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "pro_genesis_path",
      "description": "Specifies the path to the Genesis executable.",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "pro_nastran_path",
      "description": "Specify the path to MSC/NASTRAN executable.",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "pro_nei_nastran_path",
      "description": "Specifies the path to the NEi Nastran executable.",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "pro_solver_name",
      "description": "Specifies the name of the user-defined solver to be included in the SOLVE menu. See also pro_solver_path.",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "pro_solver_path",
      "description": "Specifies the path to the user-defined solver whose name is defined in the SOLVE menu. See also pro_solver_name",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_accurate_asm_links",
      "description": "Forces assembly link calculations to take into account the separation of linked shells.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_additive_mass",
      "description": "Treats Mass Idealizations as additive if they are applied to the same entity and suppresses Mass precedence rules.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_agem_delete_mesh_points",
      "description": "Yes - Deletes the points inserted during an AutoGEM session when deleting mesh elements. No - Retains the points inserted during an AutoGEM session when deleting mesh elements.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_agem_edge_by_crv_default",
      "description": "Sets the default value for the ratio of Edge Length / Radius of curvature.",
      "values": "",
      "default": "2.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_agem_edge_crv",
      "description": "Sets the value for the target ratio of Edge Length / Radius of curvature  for automatic creation of a global AutoGEM Control.",
      "values": "",
      "default": "0.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_agem_model_thickness",
      "description": "Set the value to the part thickness. This causes AutoGEM to perform more boundary refinement, and can be very useful for thinner parts.",
      "values": "",
      "default": "-1.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_auto_create_thinsolids",
      "description": "Create automatic thin solids during mesh.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_auto_map_max_angle",
      "description": "Sets the default maximum angle tolerance for auto-mapping of pressure load. The valid range is from 0 to 90 degrees.",
      "values": "",
      "default": "10.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_auto_map_max_dist",
      "description": "Sets the default maximum distance tolerance (relative to model size) for auto-mapping of pressure load. The default value is 0.0012.",
      "values": "",
      "default": "0.001200"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_auto_pairing_thickness",
      "description": "Set the value of characteristic thickness for auto-detection of shell pairs. Using this as a threshold value, auto-detection will find surface pairs with thickness smaller than this value.",
      "values": "",
      "default": "0.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_auto_regen_enabled",
      "description": "Yes - Regenerate model on entrance to Creo Simulate. No - Don't regenerate the model.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_beamsection_path",
      "description": "Specifies the path where the Beam Sections will be stored.",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_bearing_allow_cone_sel",
      "description": "Allow cone selection for creation of bearing load.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_calculate_node_reaction",
      "description": "Enables node reaction calculations for point constraints within links. The default value is NO.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_check_jacobian_corners",
      "description": "No - Suppress Jacobian checks at corner nodes. ANSYS and Nastran checks parabolic elements Jacobian at the integration points only and FEM will fix too curved elements for the same criterion. Yes - Jacobian is checked both at integration points and corner nodes. FEM mode will fix too curved elements accordingly.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_contact_penetration",
      "description": "Specify the value of contact penetration depth in percentage (greater than 0.0 up to 100.0 with default as 5.0).",
      "values": "",
      "default": "5.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_contact_tolerance_factor",
      "description": "Modifies the convergence tolerance for contact. The specified factor will be multiplied by the default tolerance.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_agem_controls",
      "description": "Toggle display of AutoGEM Controls.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_arrow_scale",
      "description": "Toggle automatic arrow scaling.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_arrow_tail_touching",
      "description": "Toggle display of Load arrows to have tails or heads touching.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_beam_releases",
      "description": "Toggle display of Beam Release icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_beam_sections",
      "description": "Toggle display of beam section icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_beams",
      "description": "Toggle display of beam icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_beams_mode",
      "description": "Specify the display mode of icons for Beams.",
      "values": "wireframe, shaded, transparent",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_contacts",
      "description": "Toggle display of contact icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_cracks",
      "description": "Toggle display of crack icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_fasteners",
      "description": "Toggle display of Fastener icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_fasteners_mode",
      "description": "Specify the display mode of icons for Fasteners.",
      "values": "wireframe, shaded, transparent",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_highlight_refs",
      "description": "Yes -  Geometrical references are highlighed when selecting a load/constraint.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_in_spin",
      "description": "Toggle display of simulation objects in Dynamic Spin.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_internal_mesh_edges",
      "description": "Specifies whether internal edges of mesh elements should be displayed in the wireframe mode. The default is \"No\".",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_load_distribution",
      "description": "Toggle display of distributed load vectors over entire entity.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_load_icons",
      "description": "Toggle display of load icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_load_name",
      "description": "Yes - The load/constraint name appears in the label.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_load_value",
      "description": "Toggle display of Load values.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_loads_from_comps",
      "description": "Toggle display of loads and constraints defined on lower-level components of assembly.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_loads_mode",
      "description": "Specify the display mode of icons for Loads and Constraints.",
      "values": "wireframe, shaded",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_loads_zi",
      "description": "Toggle zoom-insensitive behavior of shaded icons for Loads and Constraints.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_masses",
      "description": "Toggle display of mass icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_masses_mode",
      "description": "Specify the display mode of icons for Masses.",
      "values": "wireframe, shaded, transparent",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_masses_zi",
      "description": "Toggle zoom-insensitive behavior of shaded icons for Masses.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_matl_assignments",
      "description": "Toggle display of Material Assignment icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_measures",
      "description": "Toggle display of Simulation Measure icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_mesh_and_model",
      "description": "Toggle display of Mesh together with Model.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_mesh_control_name",
      "description": "Yes - The Mesh/AutoGEM control name appears in the label.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_mesh_control_value",
      "description": "Yes - The Mesh/AutoGEM control value appears in the label.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_mesh_controls",
      "description": "Toggle display of Mesh Controls.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_mesh_entities",
      "description": "Toggle display of Mesh entities.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_mesh_mode",
      "description": "Specify the mode of mesh display in FEM preprocessor.",
      "values": "wireframe, no_mesh, hidden, nohidden, shading",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_mesh_quality",
      "description": "Specify the quality of mesh display in Creo Simulate.",
      "values": "medium, fine, coarse",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_mesh_shells_thick",
      "description": "Toggle the display of shell thickness in Creo Simulate mesh. YES - Display shells with real thickness. NO - Display shells with zero thickness.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_mesh_shrink_elems",
      "description": "Control display of Mesh through a specified percentage of shrinking of its elements.",
      "values": "",
      "default": "-1"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_model_type",
      "description": "Toggle the display of the Simulation model setup in the lower left corner of Creo screen.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_names",
      "description": "Toggle display of Simulation Object names.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_rigid_dof",
      "description": "Toggle display of Rigid Link DOF icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_rigid_links",
      "description": "Toggle display of Rigid Link icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_shells",
      "description": "Toggle display of shell icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_shells_mode",
      "description": "Specify the display mode of icons for Shells.",
      "values": "wireframe, shaded, transparent, outline",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_springs",
      "description": "Toggle display of spring icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_struct_constraints",
      "description": "Toggle display of structure constraint icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_struct_loads",
      "description": "Toggle display of structure load icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_therm_bcs",
      "description": "Toggle display of Thermal Boundary Condition icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_therm_loads",
      "description": "Toggle display of thermal load icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_weighted_dof",
      "description": "Toggle display of Weighted Link DOF icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_weighted_links",
      "description": "Toggle display of Weighted Link icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_display_welds",
      "description": "Toggle display of Weld icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_expanded_diagnostics",
      "description": "Yes - Creo Simulate will perform an expanded set of diagnostic checks during meshing a model or running an analysis. These include checks for interferences in an assembly and for singular geometry. No - Creo Simulate will not perform expanded checks.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_extend_surf_max_angle",
      "description": "Controls the maximum angle between a surface to be extended during shell compression and its adjacent surfaces. If the angle is higher than specified, the adjacent surfaces is extended. The default is 30 degrees. The range is from 0 to 90 degrees.",
      "values": "",
      "default": "30.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_fatigue_biaxiality_correct",
      "description": "Controls the use of biaxiality correction. The default value is YES.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_fatigue_biaxiality_method",
      "description": "Controls which method is used to model biaxiality: SIMPLE calculates a simple biaxiality ratio only, STANDARD uses nCode method of assessment and AUTO performs the standard method, but may recalculate depending on the results of the assessment. The default value is AUTO.",
      "values": "simple, auto, standard",
      "default": "auto"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_fatigue_confidence_level",
      "description": "Specifies the percentage confidence in the predicted life result value. The default value is 90, and range is from 0.1 to 99.9",
      "values": "",
      "default": "90.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_fatigue_external_matdata",
      "description": "Controls the use of external material data. The default value is NO.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_fatigue_infinite_life_value",
      "description": "Specifies the value for the lives beyond cutoff. The default value is 1e20 and range is from 1e15 to 1e30.",
      "values": "",
      "default": "100000000000000000000.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_fatigue_max_safety_factor",
      "description": "Specifies the value for the maximum factor of safety. The default value is 5.0 and range is from 2.0 to 5e6.",
      "values": "",
      "default": "5.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_fatigue_mean_stress",
      "description": "Controls the application of the mean stress correction. The default value is YES.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_fatigue_mean_stress_method",
      "description": "Controls which method is used to model mean stress: the Morrow Correction or the Smith-Watson-Topper Approach. The default value is MORROW.",
      "values": "swt, morrow",
      "default": "morrow"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_fatigue_safety_margin",
      "description": "Specifies a factor used to determine the Life Confidence quantity. The default value is 3 and range is from 1.1 to 100.",
      "values": "",
      "default": "3.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_fatigue_user_directory",
      "description": "Specifies the directory for user files (for example, external material files). The default value is the current directory.",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_fatigue_write_surf_stress",
      "description": "Controls writing of surface stresses to a neutral file. The default value is NO.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_fem_mapped_mesh",
      "description": "Default number of sub-divisions for mapped meshing in FEM mode. Default value is 10 and range is from 1 to 99.",
      "values": "",
      "default": "10"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_fem_nastran_use_pshell",
      "description": "Yes - use PSHELL cards, No - use PCOMP cards for laminate composite shells in NASTRAN output file.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_html_report_prefs_file",
      "description": "Specifies the path to the Simulation post processor HTML report preferences file.",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_hyperelastic_material_fit",
      "description": "Sets the default method for calculating coefficients for hyperelastic materials. If set to \"normalized\", normalized stresses will be used. If set to \"non-normalized\", non-normalized stresses will be used.",
      "values": "normalized, non-normalized",
      "default": "normalized"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_icon_distribution_density",
      "description": "Determines how many icons are drawn for a distribution. 1 is fewer, 10 is the highest.",
      "values": "",
      "default": "-1"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_ignore_unpaired",
      "description": "Control whether unpaired surfaces are ignored when meshing the model.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_invoke_diagnostics_on_run",
      "description": "Sets the default for the display of diagnostics during the run of an analysis in Creo Simulate Native mode. If set to prompt, the user is prompted to run  diagnostics every time he/she starts a run.",
      "values": "yes, no, prompt",
      "default": "prompt"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_live_result_quality",
      "description": "Set the default value of accuracy for live simulation. The value varies from 0.05 to 1.0, and can be changed by multiples of 0.05.",
      "values": "",
      "default": "0.250000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_load_mech_mesh",
      "description": "No - The user is prompted to load the existing Creo Simulate mesh file from the current working directory. Yes - The mesh file, if exists, is loaded automatically and the mesh is displayed.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_loadpreview",
      "description": "Sets the type of load preview: vectors, fringe or mesh.",
      "values": "vectors, fringe, mesh",
      "default": "fringe"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_massnorm_modes",
      "description": "Mass normalize modes. If set to no, the modes are normalized to a maximum displacement of 1. The default is no.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_mat_poissons_notation",
      "description": "Specifies the convention used for defining Poisson's ratio for anisotropic materials as being either Tsai (Column-normalized) or Jones (Row-normalized). This option affects only the labels for Poisson's ratio on the Material data form.",
      "values": "tsai, jones",
      "default": "tsai"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_max_contact_iterations",
      "description": "Specify the maximum number of iterations for contact analysis. The default is 200.",
      "values": "",
      "default": "200"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_max_memory_usage",
      "description": "Specifies the maximum amount of memory in megabytes to be allocated during FEM meshing. If this option is not set, or set to zero, the mesher can use all available memory.",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_modal_disp_superposition",
      "description": "Specify whether modal displacement superposition should be used in dynamic analyses.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_modal_stress_superposition",
      "description": "If set to yes, use the modal stress superposition method to compute the stress results. If set to no, use the superconvergent stress recovery method.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_native_mapped_mesh",
      "description": "Default number of sub-divisions for mapped meshing in Native mode. Default value is 3 and range is from 1 to 99.",
      "values": "",
      "default": "3"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_newton_debugprint",
      "description": "Output newton and snapthrough debug info to pas file.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_newton_tolerance_factor",
      "description": "Modifies the convergence tolerance for newton loop. The specified factor will be multiplied by the default tolerance.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_nl_ldc",
      "description": "Output load deflection curve to ldc file.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_output_ids_for_layers",
      "description": "Outputs FEM mesh element IDs on each layer into XML file.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_override_axis_selection",
      "description": "Override the default axis selection for symmetry constraint.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_perturbation_solvers",
      "description": "Use perturbation solvers in the calculation of local sensitivity. The default is yes.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_background_color",
      "description": "Specifies the background color of the work area for the results display. The default value is PROE.",
      "values": "proe, blue, black, white",
      "default": "proe"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_display_beam_thickness",
      "description": "Sets the thickness for beams and 2D-shells display in Post Processor. Numerical values specify the thickness in pixels.",
      "values": "1, 3, 2, 4, 5, actual",
      "default": "5"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_display_spin_center",
      "description": "Sets the default for the behavior of mouse spinning           the model in results.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_legacy_selection",
      "description": "Enables legacy selection of geometrical entities from Creo Simulate results postprocessor on Creo Simulate geometry.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_legend_continuous",
      "description": "Determines if the legend will be continuous tone (YES) or discrete colors (NO).",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_legend_levels",
      "description": "The default number of legend levels (from 1 to 16; the default is 9).",
      "values": "",
      "default": "9"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_legend_show",
      "description": "If set to NO, the legend is not displayed in newly created results windows by default.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_legend_show_min_max",
      "description": "If set to NO, the gray minimum and maximum values are not displayed by default in the legend.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_legend_spectrum",
      "description": "This string sets the default color legend used in the definition of a results window. This file will be looked up in the sim_pp_template_dir location, or, if this is not specified, in the current working directory.",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_linked_results",
      "description": "Set this option to Yes to link the vaulted Simulate results to the model that is checked in, for this session. The default value of this option is Yes.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_path_absolute",
      "description": "Choose Absolute (Yes) or Relative (No) path to \"rwd\" file.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_query_location",
      "description": "Sets the default value for the display of the WCS location in dynamic query in results.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_show_cap_cut_outline",
      "description": "Enables to hide the model outline in capping/cutting surface display.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_struct_avg_res",
      "description": "Yes - Averages results in Simulate Results. Applicable only for Creo Simulate Structure Mode Analysis types.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_template_dir",
      "description": "Sets the default directory for results template files.",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_vector_plot_arrow_2d",
      "description": "To draw 2D arrows instead of 3D arrows while post-processing vector results. It is useful when system memory is not sufficient to display3D vector arrows.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_vrml_export_format",
      "description": "Flags to denote VRML1.0 or VRML2.0 (default) output.",
      "values": "vrml2.0, vrml1.0",
      "default": "vrml2.0"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_pp_vrml_feature_edges",
      "description": "Flag to enable the inclusion of feature edges in the VRML file. The default value is NO.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_prop_range_factor",
      "description": "A factor to compare Simulate properties and warn about large variations.",
      "values": "",
      "default": "1000.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_reentrant_geom_angle",
      "description": "Sets the default value for reentrant geometry detection in both Isolation for Exclusion AutoGEM Control and expanded diagnostics checks. The valid range is from 0 to 180 degrees. The default is 120 degrees.",
      "values": "",
      "default": "120.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_remove_unopposed",
      "description": "Yes - The system ignores unopposed surfaces when meshing the model; the system also deselects the UseUnopposed option. No - the system uses the unopposed surfaces in the shell model.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_results_on_first_pass",
      "description": "Forces results post-processing after the first pass of an SPA analysis.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_run_out_dir",
      "description": "Specify the directory for Creo Simulate run output storage. By default, the current directory is used.",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_run_tmp_dir",
      "description": "Specify the directory for Creo Simulate run temporary storage. By default, the current directory is used.",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_sif_measure_size_factor",
      "description": "Controls the size of the elements that touch the tip of the crack, relative to the size of the crack.",
      "values": "",
      "default": "0.100000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_smooth_aspect_ratio",
      "description": "Sets the element aspect ratio criterion for the mesh smoothing process.",
      "values": "",
      "default": "7.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_smooth_edge_angle",
      "description": "Sets the element edge angle criterion (Quad elements only), measured in degrees, for the mesh smoothing process.",
      "values": "",
      "default": "30.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_smooth_skew",
      "description": "Sets the element skew angle criterion (Quad elements only), measured in degrees, for the mesh smoothing process.",
      "values": "",
      "default": "45.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_smooth_taper",
      "description": "Sets the element taper criterion (Quad elements only) for the mesh smoothing process.",
      "values": "",
      "default": "0.500000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_smooth_warp_angle",
      "description": "Sets the element warp angle criterion (Quad elements only), measured in degrees, for the mesh smoothing process.",
      "values": "",
      "default": "10.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_snap_tolerance_factor",
      "description": "Modifies the start tolerance for snapthrough. The specified factor will be multiplied by the default tolerance.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_solver_memory_allocation",
      "description": "Specifies the amount of memory in megabytes reserved for solving equations and for storing element data created by the iterative solver. The default value is 512.",
      "values": "",
      "default": "512"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_spotweld_split_mesh",
      "description": "If set to YES (default), the elements that touch the end of the spot weld are created in a circle the same diameter as the weld (AutoGEM only).",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_struct_interface_default",
      "description": "Sets the default for the interfaces created between the geometry in a structural model for meshing and running analysis.",
      "values": "free, bonded, contact",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_sturm_sequence",
      "description": "Run the Sturm sequence test for a modal analysis. By default, the solver automatically decides when to perform the Sturm sequence test.",
      "values": "never, default, always",
      "default": "default"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_supercon_recovery",
      "description": "Sets on or off the superconvergent stress recovery algorithm.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_therm_interface_default",
      "description": "Sets the default for the interfaces created between the geometry in a thermal model for meshing and running analysis.",
      "values": "bonded, resistance, adiabatic",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "sim_thinsolid_char_thickness",
      "description": "Controls the characteristic thickness for automatic thin solids.",
      "values": "",
      "default": "5.000000"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_use_layers",
      "description": "Allows layers to become groups for Creo Simulate Independent mode.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_wf5_fastener_fix_separation",
      "description": "Sets the value of Fix Separation for fasteners created in Wildfire 5.0 or  earlier with Fix Separation set to Auto.",
      "values": "yes, no, default",
      "default": "default"
    },
    {
      "category": "Creo Simulate",
      "name": "sim_wf5_fastener_frictionless",
      "description": "Sets the value of Frictionless Interface for Fasteners created in Wildfire 5.0 or earlier.",
      "values": "yes, no, default",
      "default": "default"
    },
    {
      "category": "Creo Simulate",
      "name": "simlive_default_simulation",
      "description": "Set the default Live Simulation type.",
      "values": "thermal, structural, modal, fluid",
      "default": "structural"
    },
    {
      "category": "Creo Simulate",
      "name": "simlive_reference_scope",
      "description": "Define the behavior upon selection of simulation entities references.",
      "values": "yes, no, prompt",
      "default": "prompt"
    },
    {
      "category": "Creo Simulate",
      "name": "simulation_fem_mode",
      "description": "Yes - Activate FEM mode of Creo Simulate. No (default) - Activate Native mode of Creo Simulate.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "simulation_mode",
      "description": "Specify Creo Simulate mode - Structure (default) or Thermal. This option is used only if the information about Creo Simulate mode is not yet stored with the model.",
      "values": "structure, thermal",
      "default": "structure"
    },
    {
      "category": "Creo Simulate",
      "name": "simulation_probes_auto_hide",
      "description": "Define whether Probes of other simulations studies will be automatically hidden upon Study activation.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Creo Simulate",
      "name": "simulation_process_auto_advance",
      "description": "If set to yes the Process Guide will advance to the next set automatically upon completion of the current step.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "simulation_process_prompt",
      "description": "If set to yes, the Process Guide will be launched automatically upon entry into Creo Simulate, if template files are present.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Creo Simulate",
      "name": "simulation_process_template_dir",
      "description": "Specifies the default location of the Process Guide template files.",
      "values": "",
      "default": ""
    },
    {
      "category": "Creo Simulate",
      "name": "std_nastran_template",
      "description": "Sets the file path of a NASTRAN deck template. Use full path to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "afx_enabled",
      "description": "Loads AFX application.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "allow_flat_to_screen_note",
      "description": "Allow creation of flat to screen notes when option is set to true",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "atb_auto_check_on_activate",
      "description": "Sets state of ATB 'Auto Check Status On Activate' toggle.",
      "values": "off, on",
      "default": "off"
    },
    {
      "category": "Data Exchange",
      "name": "atb_auto_check_on_retrieve",
      "description": "Sets state of ATB 'Auto Check Status On Retrieve' toggle.",
      "values": "off, on",
      "default": "on"
    },
    {
      "category": "Data Exchange",
      "name": "atb_auto_check_on_update",
      "description": "Sets state of ATB 'Auto Check Status On Update' toggle.",
      "values": "off, on",
      "default": "off"
    },
    {
      "category": "Data Exchange",
      "name": "atb_ident_cadds_files",
      "description": "Allows to identify CADDS files in the file open browser.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "atb_prod_asm_upd_by_comp_ids",
      "description": "Allows to update a Pro/DESKTOP assembly based on assembly component ids, if set to YES. Otherwise, the update will be based on component names.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "atb_show_foreign_name",
      "description": "Displays foreign source model name in the model tree for imported models.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "atb_show_log",
      "description": "Sets state of ATB 'Show Log' toggle.",
      "values": "off, on",
      "default": "on"
    },
    {
      "category": "Data Exchange",
      "name": "auto_associate_dimensions",
      "description": "If set to yes, Creo will attempt to take imported dimensions that are not associative and link them to geometric entities so that they act as associative.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "board_bend_notes_dflt_display",
      "description": "Define the default state of bend note display (board mode)",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "board_bend_notes_direction_down",
      "description": "Defines the down direction symbol for board bend notes.",
      "values": "",
      "default": "default"
    },
    {
      "category": "Data Exchange",
      "name": "board_bend_notes_direction_up",
      "description": "Defines the up direction symbol for board bend notes.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "board_bend_notes_order",
      "description": "Defines the fields order for board bend notes.",
      "values": "",
      "default": "&type&direction&angle"
    },
    {
      "category": "Data Exchange",
      "name": "board_bend_notes_type_formed",
      "description": "Defines the formed symbol for board bend notes.",
      "values": "",
      "default": "default"
    },
    {
      "category": "Data Exchange",
      "name": "board_bend_notes_type_rolled",
      "description": "Defines the rolled symbol for board bend notes.",
      "values": "",
      "default": "default"
    },
    {
      "category": "Data Exchange",
      "name": "board_bend_table_directory",
      "description": "Will be used to set the bend allowance table only. Sets the default directory of the board bend allowance table files. If not set,  the system supplied bend tables are used. Use the full name and  path to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "board_design_rules_directory",
      "description": "Will be used to set the design rules file folder only. Will be used  by the design rules manager. Sets the default directory of the  board design rules files. Use the full name and path to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "board_drive_bend_by_parameters",
      "description": "Board bend radius and bend angle values and bend  dimension location will be driven by feature-level  relations to board parameters.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "board_drive_tools_by_parameters",
      "description": "Drives the board options and values by feature-level  relations to board parameters.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "board_flange_shape_sketches_dir",
      "description": "Sets path to directory that contains the Flange shapes.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "board_flat_shape_sketches_dir",
      "description": "Sets path to directory that contains the Flat shapes.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "board_parameters_directory",
      "description": "Specifies the directory to save/retrieve board parameters files. Use full name and path to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "cadds_import_layer",
      "description": "Allows import of CADDS5 layering.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "cgm_use_pentable",
      "description": "No - Do not use a defined pen table for formatting of CGM export.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "cri_grafting_enable",
      "description": "Activates \"Graft features\" button under File menu. This allows user to graft features created in CRI model to active model.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "dazix_default_placement_unit",
      "description": "Specifies the units to be used for data imported in Dazix files.",
      "values": "micron, mm, thou",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "dazix_export_mounthole",
      "description": "Yes - Causes the MOUNTHOLE section of a Dazix file to be processed as a mount hole.  No - Causes the MOUNTHOLE section to be processed as a cut.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "dazix_z_translation",
      "description": "Yes - Passes the objects in the .edn files through z translation.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "direct_vrml",
      "description": "Yes - Enables direct VRML conversion.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "drawing_name_sameas_model_name",
      "description": "Controls the state of the Use drawing model file name check box. Yes- Automatically gives the drawing the name of the related model. No- Allows you to provide the drawing name of your choice.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "dwg_export_format",
      "description": "Provides the ability to choose DWG file version when exporting 2D or 3D Creo models.",
      "values": "14, 2000, 2004, 2007, 2010, 2013, 2018",
      "default": "2018"
    },
    {
      "category": "Data Exchange",
      "name": "dxf_block_to_pro_symbol",
      "description": "Specifies whether or not DXF BLOCKS to be imported as Creo symbols. Yes - Imports BLOCKS as symbol definitions, No - Imports BLOCKS as separate entities.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "dxf_export_format",
      "description": "Provides the ability to choose DXF file version when exporting 2D or 3D Creo models.",
      "values": "12, 13, 14, 2000, 2004, 2007, 2010, 2013, 2018",
      "default": "2018"
    },
    {
      "category": "Data Exchange",
      "name": "dxf_in_faceted_brep",
      "description": "Default, faceted boundary representation is allowed in import.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "dxf_out_comments",
      "description": "YES - comments (999 group codes) will be created in DXF file exported from Creo. NO - DXF file will be created without comment lines.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "dxf_out_drawing_scale",
      "description": "Specify whether or not to export drawing scale to the DXF or DWG file. Yes - Includes a scale factor DIMLFAC in the exported DXF/DWG. No - Exports without using a scale for the drawing. Set to Yes when exporting to read into AutoCAD.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "dxf_out_scale_views",
      "description": "Specify whether or not to scale drawing views when exporting to the  DXF or DWG file.  Yes - rescales the entire drawing in such a way that the main view  scale becomes 1:1. No - exports without rescaling.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "dxf_out_sep_dim_w_breaks",
      "description": "YES - Breaks dimensions with breaks on witness lines to separate entities and preserves the original picture. No - Exports such dimensions as DXF DIMENSION entities and removes the breaks on witness lines.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "dxfio_in_sjis",
      "description": "Determines if the SJIS is supported when importing/exporting DXF files in Japanese",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_area_default_import",
      "description": "Defines how imported ECAD areas are treated. Cosm_area - Treats imported ECAD areas as cosmetic area features. 3d_volume - Imports ECAD areas with Z-heights as a 3D enclosed quilt.",
      "values": "3d_volume, cosm_area",
      "default": "cosm_area"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_board_csys_def_name",
      "description": "Specifies the default coordinate system name added to an ECAD board being imported. If you do not set this variable, the system prompts you for a name.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "ecad_comp_csys_def_name",
      "description": "Specifies the default coordinate system name added to an ECAD component being imported. If you do not set this variable, the system prompts you for a name.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "ecad_comp_layer_map",
      "description": "Allow layer mapping for ECAD component's import into Assembly.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_comp_naming_convention",
      "description": "ECAD_NAME / ECAD_ALT_NAME - Uses the components package name or part number as the part name.  ECAD_NAME_ECAD_ALT_NAME - Concatenates the component's package name and part number as the part name.",
      "values": "ecad_name, ecad_name_ecad_alt_name, ecad_alt_name",
      "default": "ecad_name"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_comp_xsec_def_name",
      "description": "Will allow pre-setting default X-section to be used for component outline output to *.eda format.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "ecad_conductor_display",
      "description": "Sets the context for ECAD conductors display. Only in ECAD mode - Conductors are only visible in the context of an ECAD Assembly and an ECAD Board part. Always - Conductors are always visible.",
      "values": "always, only_in_ecad_mode",
      "default": "only_in_ecad_mode"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_create_hint_add",
      "description": "Assists in creation of an ecad_hint.map file. Yes - Automatically renames components, if necessary, each time library of component outlines is imported to Creo. This does not create an ecad_hint.map file. It controls if ecad_hint.add is created.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_default_comp_height",
      "description": "Sets default value and units for an ECAD component being imported. Units can be: inch, mil (1E-3 inches), thou (1E-6 inches), cm, mm, micron (1E-6 meters), dsu (1E-8 meters). If not set, the system uses the current component's units.",
      "values": "",
      "default": "-1.000000 ecad_unit_not_set"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_default_comp_place_status",
      "description": "Sets default component placement status for export (parameter setting will override the default).",
      "values": "unplaced, fixed, placed, mcad, ecad",
      "default": "placed"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_edmd_out_version",
      "description": "Set the EDMD output version.",
      "values": "2.0, 1.2, 3.0",
      "default": "3.0"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_exp_both_two_areas",
      "description": "Supports the export of ECAD areas with different \"Above Board\" and \"Below Board\" conditions.  \"yes\" - Enables you to export both sided keep-in/keep-out ECAD areas as two individual areas (top and bottom).",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_export_cuts_as_holes",
      "description": "Exports Creo cuts as holes to ECAD systems.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_export_holes_as_cuts",
      "description": "Exports Creo holes as cuts to ECAD systems.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_imp_auto_brd_outl_fix_tol",
      "description": "Overrides tolerance calculations for automatically fixing the board outline during IDX import.",
      "values": "",
      "default": "0.000000"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_imp_bypass_brd_outl_fix",
      "description": "Allows bypassing manual fixing of the board outline during IDX import. yes - Bypasses manual fixing of the board outline. The board can be edited later.  no (default) - Allows manual fixing of the board.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_imp_conductor_def_geom_rep",
      "description": "Specify the default geometry representation of conductors when you import them into an ECAD design.",
      "values": "all_entities, all_surfaces, all_quilts",
      "default": "all_entities"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_import_holes_as_features",
      "description": "Import sections specified as DRILLED_HOLE as through-all holes. Boards created with Creo drilled holes export with default value of NPTH for the ECAD_HOLE_TYPE parameter. Create this feature parameter if a value of PTH is needed (IDF 2.0/3.0).",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_import_relative_accuracy",
      "description": "Defines the relative accuracy used in ECAD import.",
      "values": "",
      "default": "0.001200"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_load_conductor_data",
      "description": "Sets loading conductor data when the model is opened or retrieved.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_load_filtered_holes_to_ui",
      "description": "Controls whether \"ECAD import holes configs\" (ecad_pin_hole_import & ecad_via_hole_import) will remove holes completely from the import (default) or just pre-set the holes filter UI condition.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_mapping_file",
      "description": "Specify the ecad_hint.map file that will be used for ECAD operations.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "ecad_missing_component_status",
      "description": "Setup default status for missing components in \"Investigate Placement\" Dialog.",
      "values": "keep_missing, delete_missing",
      "default": "keep_missing"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_mtg_hole_import",
      "description": "Setup the default for the import of ECAD Holes type MTG (IDF 3.0 or IDX ONLY)",
      "values": "yes, no, as lightweight",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_other_outl_csys_def_name",
      "description": "Specifies the default coordinate system name for the .OTHER_OUTLINE section of an IDF 2.0 ECAD component being imported. If you do not set this variable, the system uses ECAD DEFAULT as coordinate system name.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "ecad_outline_ents_enhanced_exp",
      "description": "Enhanced export of special entities to ECAD formats. Yes - Attempt to approximate arcs and lines. No - Use part accuracy to approximate lines.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_outline_holes_exp_method",
      "description": "Select how holes that are placed on the board outline be exported.",
      "values": "default, arcs",
      "default": "default"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_panel_csys_def_name",
      "description": "Specifies the default coordinate system name added to an ECAD panel being imported. If you do not set this variable, the system prompts you for a name.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "ecad_pin_hole_import",
      "description": "Set up the default for the import of ECAD Holes from type PIN (IDF 3.0 or IDX ONLY)",
      "values": "yes, no, as lightweight",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_reject_strategy",
      "description": "Configures the way the changes are rejected.",
      "values": "ui_based, as_original, as_base",
      "default": "ui_based"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_save_conductor_data",
      "description": "Specifies an option for saving conductor data when the model is saved. No - Conductor information is not saved. Minimal - The minimum required data that allows Conductor information to be calculated in runtime is saved. Upon retrieval, conductors are retrieved as entities and require using the conductors tools to update their orientation and representation. Full - All Conductor information is saved.",
      "values": "no, full, minimal",
      "default": "full"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_set_intercomm_compatible",
      "description": "Yes - Set both EDA format version and output method to support InterComm product, yes or no.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_tool_hole_import",
      "description": "Setup the default for the import of ECAD Holes type TOOL (IDF 3.0 or IDX ONLY)",
      "values": "yes, no, as lightweight",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecad_usrdef_area_type_file_path",
      "description": "Specifies path to csv file with a list of user defined ECAD area types.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "ecad_via_hole_import",
      "description": "Set up the default for the import of ECAD Holes from type VIA (IDF 3.0 or IDX ONLY)",
      "values": "yes, no, as lightweight",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecadcollab_accept_color",
      "description": "ECAD Collaboration Accept color",
      "values": "",
      "default": "0.0 255.0 0.0"
    },
    {
      "category": "Data Exchange",
      "name": "ecadcollab_auto_redef_areas",
      "description": "Automatically redefine ECAD Areas affected by collaboration changes",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecadcollab_auto_redef_comps",
      "description": "Automatically redefine components affected by collaboration changes",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecadcollab_auto_redef_holes",
      "description": "Automatically redefine holes affected by collaboration changes",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecadcollab_preview_after_color",
      "description": "ECAD Collaboration Preview After color",
      "values": "",
      "default": "255.0 127.0 0.0"
    },
    {
      "category": "Data Exchange",
      "name": "ecadcollab_preview_before_color",
      "description": "ECAD Collaboration Preview Before color",
      "values": "",
      "default": "0.0 155.0 230.0"
    },
    {
      "category": "Data Exchange",
      "name": "ecadcollab_preview_level",
      "description": "ECAD Collaboration preview Level",
      "values": "full, partial, light",
      "default": "partial"
    },
    {
      "category": "Data Exchange",
      "name": "ecadcollab_reject_color",
      "description": "ECAD Collaboration Reject color",
      "values": "",
      "default": "255.0 127.0 127.0"
    },
    {
      "category": "Data Exchange",
      "name": "ecadcollab_scan_des_on_area_chg",
      "description": "Check for affected objects resulting from ECAD Areas collaboration changes",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecadcollab_scan_des_on_brd_chg",
      "description": "Check for affected objects resulting from board collaboration changes",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecadcollab_scan_des_on_comp_chg",
      "description": "Check for affected objects resulting from components collaboration changes",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecadcollab_scan_des_on_hole_chg",
      "description": "Check for affected objects resulting from holes collaboration changes",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecadcollab_supp_failed_feats",
      "description": "Suppress of failed features on Object changes",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "ecadcollab_suppress_cuts",
      "description": "Automatically suppress cut features in case of board collaboration changes",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "enable_cadra_export",
      "description": "Enables the CADRA command in the EXPORT menu. This enables the creation of a CADRA specific IGES file.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "explode_iges_dimension_note",
      "description": "Controls how dimensions are treated when importing an IGES drawing file. Yes - Each IGES dimension explodes into an independent note with the dimension text and a dimension with an empty note. No - Dimensions are treated as before.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "export_3d_force_default_naming",
      "description": "Specify whether the Creo model names should be used during export. Yes - Use default naming. No - Add suffixes to model file names.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "export_to_shipit",
      "description": "Enable Ship-it interface export.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "extend_cvpath",
      "description": "Extends CVPATH search path for CADDS5 data exchanging.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "fix_autocad_iges_text_scale",
      "description": "Fixes scaling problems with AutoCAD releases earlier than Release 10. Yes - Repairs AutoCAD files appropriately.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "fix_catia_iges_sym_note",
      "description": "Corrects a problem caused by multiple rotations of a note in a CATIA IGES file. Yes - Rectifies any discrepancies.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "frt_enabled",
      "description": "Loads feature recognition application.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "hide_pre_creo6_note_properties",
      "description": "yes - Hides the Note Properties command in the model environment.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "iges_clip_view_ent",
      "description": "Determines whether IGES entities are clipped with regards to IGES views. YES - Entities outside the view outline are clipped. NO - No clipping.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "iges_clip_view_note",
      "description": "Determines how IGES notes are clipped with regards to IGES views. No_clip - No clipping. Full_clip - Notes that are partially outside the view outline are clipped. Partial_clip - Notes completely outside the view outline are clipped.",
      "values": "no_clip, full_clip, partial_clip",
      "default": "no_clip"
    },
    {
      "category": "Data Exchange",
      "name": "iges_export_dwg_views",
      "description": "Yes - Exports drawing view information. No - Does not export drawing view information.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "iges_in_dwg_color",
      "description": "Yes - Import RGB information to IGES files. The color definition entities in the IGES file are imported to the drawings as user-defined colors. No - The color-definition entities in the IGES files are ignored when importing to the drawing.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "iges_in_dwg_line_font",
      "description": "Controls the import of user-defined line fonts. Yes - Give default names to user-defined line styles without names in order (\"IGES_1,\" \"IGES_2\" etc.). No - Imports the user-defined line fonts as Solid line font.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "iges_in_group_to_dwg_layer",
      "description": "Yes - Converts an IGES group to drawing layers. No - The IGES group is not converted.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "iges_note_disp",
      "description": "Determines what to do when IGES note entities do not point to any views or the drawing entity. See the configuration option iges_zero_view_disp.",
      "values": "as_geometry, all_views, no_views, as_is",
      "default": "all_views"
    },
    {
      "category": "Data Exchange",
      "name": "iges_out_catia_gdt_width",
      "description": "Yes - Enables the desired width of a gtol symbol to be exported to CATIA.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "iges_out_catia_notes",
      "description": "Yes - Breaks a large note (greater than 70 strings) down into smaller notes, each producing an IGES entity.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "iges_out_dwg_color",
      "description": "Yes - Enables the export of RGB information to IGES files. The user-defined colors in the drawing are exported to an IGES file as color definition entities. No - Ignores the user-defined colors in the drawing when exporting IGES file.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "iges_out_dwg_line_font",
      "description": "Controls the export of user-defined line font through IGES. No - Exports all geometry as solid font.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "iges_out_jamais_compliant",
      "description": "Yes - Specifies IGES output with special JAMA-IS subset specification, compliant with the version 1.02 of JAMA-IS (Japan Automobile Manufacturers Association IGES Subset Specification). No - Specifies normal IGES.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "iges_out_mil_d_28000",
      "description": "Yes - Specifies IGES output that uses the MIL-D-28000 entity subset.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "iges_out_start_note",
      "description": "Yes - Exports the text specified by system_iges_header_file and user_iges_header_file as a note on the drawing. To control note placement, use the configuration file option put_iges_drawing_entity.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "iges_out_symbol_entity",
      "description": "Exports a drawing symbol as an IGES general symbol entity, IGES type number 228 (yes), or as its component entities: notes and lines.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "iges_out_trim_curve_deviation",
      "description": "Sets the maximum value for the distance between an XYZ trimming curve (boundary) and the underlying surface of a trimmed surface",
      "values": "",
      "default": "-1.000000"
    },
    {
      "category": "Data Exchange",
      "name": "iges_zero_view_disp",
      "description": "When IGES geometry does not point to any views or the drawing entity. All_views - Creates a copy of the entity for each view. No_views - Does not create the entity at all. As_is - Creates the entity once, using only its own transformation information.",
      "values": "all_views, no_views, as_is",
      "default": "all_views"
    },
    {
      "category": "Data Exchange",
      "name": "initial_board_bend_y_factor",
      "description": "Specifies a value used to determine the neutral bend line for a board part. This value is always used for non-cylindrical bends. It is used for regular bends only when no bend table is specified",
      "values": "",
      "default": "0.500000"
    },
    {
      "category": "Data Exchange",
      "name": "interface_quality",
      "description": "Sets amount of checking for overlapping lines and collecting lines of same pen color before exporting plot or 2-D file. 0 - No check or collection. 1 - No check, but collection. 2 - Partial check and collection. 3 - Complete check and collection.",
      "values": "",
      "default": "3"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_fit_incompatible_data",
      "description": "YES - For import and export, fixes compatibility problems between 2-D external formats (such as IGES and DXF) and Creo.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_iges_out_hatch",
      "description": "YES - Exports draft xhatching as IGES sectioned area entity. NO - exports draft xhatching as separate geometric entities.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_acad_append_by_dnd",
      "description": "Allows you to append a DXF or DWG drawing by dragging it to an existing Creo drawing.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_acad_expl_unsupp_ents",
      "description": "Yes - ACAD_PROXY_ENTITY and REGION entities are imported as set of draft entities, No - ACAD_PROXY_ENTITY and REGION entities are ignored.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_acad_fix_dim_text",
      "description": "If set to YES tries to fix dimension texts with missing special characters with the information from dimension definition.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_acad_ignore_3d",
      "description": "YES - Ignore the 3DSOLID entities, if they exist, in the DXF/DWG file being imported in Drawing mode. Only, the 2D entities are processed.  NO - Create an assembly by processing the 3DSOLID entities in the DWG/DXF file being imported in Drawing mode. This is the default value for this option.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_acad_scale_line_fonts",
      "description": "Specify whether or not to scale line fonts when importing a DXF or DWG file to a Creo drawing. Yes - the line fonts will be scaled based on the drawing sheet size, No - the line fonts will not be scaled.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_acad_wrap_tbl_texts",
      "description": "Wrap table texts imported from a DXF or DWG file when set to YES.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_assoc_dim_geom",
      "description": "Controls if imported associative dimensions remain associative. Yes - If the drawing setup option associative_dimensioning is Yes, then dimensions are imported associative. No - Dimensions do not retain associativity.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_bottom_margin",
      "description": "Sets the bottom margin in drawing units for imported drawings.",
      "values": "",
      "default": "0.000000"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_ced_3d_containers",
      "description": "If set to YES containers will be included when importing a CED drawing associative to a 3D model to Creo.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_ced_3d_empty_parts",
      "description": "If set to YES empty parts will be included when importing a CED drawing associative to a 3D model to Creo.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_ced_3d_face_parts",
      "description": "If set to YES face parts will be included when importing a CED drawing associative to a 3D model to Creo.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_ced_3d_wire_parts",
      "description": "If set to YES wire parts will be included when importing a CED drawing associative to a 3D model to Creo.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_ced_cenl_as_axes",
      "description": "Specifies whether CED centerlines are imported as axes or as draft entities when importing a CED drawing associative with a 3D model. Yes - Centerlines are imported as axes.  No - Centerlines are imported as draft entities.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_ced_xsec_arrows",
      "description": "If set to YES - cross-section arrows are created when importing a CED associative drawing with section views.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_create_multiline_note",
      "description": "Create a single multi-line note on importing multi-line text when is set to YES.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_dim",
      "description": "AS_SEP_ENT - Imports each component of a dimension separately. AS_IS - Imports dimensions as dimensions in Pro/ENGINEER. AS_SYMBOL - Imports dimensions as symbols in Pro/ENGINEER.",
      "values": "as_symbol, as_is, as_sep_ent",
      "default": "as_is"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_dxf_mapping_file",
      "description": "Specifies the mapping file for DXF and DWG import. Absolute or relative path to the file can be used.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_iges_hatch_bnd_layer",
      "description": "Yes - Places all sectioned areas boundary imported from the IGES file in one layer named IGES_HATCH_BOUNDARY. NO - Does not place sectioned areas boundary in one layer.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_iges_symbols",
      "description": "Controls whether to import IGES symbols as symbols or as entities by default. Yes - Import IGES symbols as symbols by default. No - Import IGES symbols as entities by default.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_left_margin",
      "description": "Sets the left margin in drawing units for imported drawings.",
      "values": "",
      "default": "0.000000"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_mi_brk_unsupp_dim",
      "description": "Yes - Breaks unsupported MI dimension types to separate entities, No - Imports unsupported MI dimension types as different type dimensions that can look differently.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_mi_lay_parts",
      "description": "Yes - Maps MI drafting parts to layers, No - Imports MI drafting parts as separate entities.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_mi_mapping_file",
      "description": "Specifies the mapping file for MI import. Absolute or relative path to the file can be used.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_mi_sym_parts",
      "description": "Yes - Maps MI symbol parts to symbols, No - Imports MI symbol parts as separate entities.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_open_log_window",
      "description": "Yes - Opens Import Log File in a separate window. No - The Log File does not appear in the window.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_recompute_dim_value",
      "description": "Indicates whether to recompute associative dimensions upon import.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_right_margin",
      "description": "Sets the right margin in drawing units for imported drawings.",
      "values": "",
      "default": "0.000000"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_std_clrs_as_user_def",
      "description": "Yes - standard colors are imported as user-defined colors. No - standard colors are mapped to Creo colors.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_symbol_font",
      "description": "Sets the font type to which the imported text symbols mapped when you import non-native drawings into new drawings in Creo.",
      "values": "asme, iso, legacy, stroked asme, stroked iso",
      "default": "asme"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_top_margin",
      "description": "Sets the top margin in drawing units for imported drawings.",
      "values": "",
      "default": "0.000000"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_in_white_as_black",
      "description": "If set to yes entities having white color will be imported as black when the background color is white.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_acad_brk_tbl_w_bl_ln",
      "description": "Yes - drawing tables having blanked lines are exported to DXF/DWG as separate entities, No - the tables are exported as DXF/DWG tables but the lines are not blanked.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_acad_ellipses",
      "description": "Yes - ellipses will be exported to DXF or DWG as ellipses. No - ellipses will be exported as splines.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_acad_mtext",
      "description": "Create a single MTEXT entity for multi-line text notes when is set to YES.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_acad_norm_lead_block",
      "description": "Yes - Multiple normal leader annotations are exported to DWG and DXF file formats as blocks. No - Multiple normal leader annotations are exported to DWG and DXF file formats as separate entities.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_acad_ole_as_image",
      "description": "Controls OLE export to DXF/DWG. Yes - exports OLE objects as DXF/DWG IMAGEs. No - exports OLE objects as separate entities.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_acad_sym_block_name",
      "description": "Determines whether symbol definition or symbols instance names are used as block names in DXF/DWG export when symbols are mapped to blocks. SYM_DEF - symbol definition names are used, SYM_INST - symbol instance names are used.",
      "values": "sym_def, sym_inst",
      "default": "sym_def"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_acad_text_align",
      "description": "As_is - Exports notes to DXF/DWG with their original alignment values. Fit - Exports notes with FIT alignment.",
      "values": "as_is, fit",
      "default": "as_is"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_acad_unicode",
      "description": "Yes - Non-ASCII characters are written in UNICODE encoding.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_blanked_layers",
      "description": "Enables export of blanked layer entities. If an entity is placed on a layer that is blanked and this option is set to YES, the entity will be exported.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_cgm_old_lfont_map",
      "description": "Yes - Use the old line font mapping in CGM export: hidden lines to type 2, CTRLFONT to type 4, PHANTOMFONT to type 5. No - Use the new mapping: hidden lines to type 12, CTRLFONT to type 11, PHANTOMFONT to type 13.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_cgm_pentab_for_text",
      "description": "Yes - Pen table controls the thickness of the stroked text when a pen table is applied to the text of drawings that are exported to the CGM file format.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_cgm_ver",
      "description": "Provides the ability to choose CGM metafile version when exporting from Creo drawing.",
      "values": "1, 3",
      "default": "1"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_dxf_mapping_file",
      "description": "Specifies the mapping file for DXF and DWG export. Absolute or relative path to the file can be used.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_enhanced_ents",
      "description": "Controls whether the enhanced entities (SPLINE and HATCHING) are converted to the corresponding DXF entities or represented as separate lines and polylines.",
      "values": "none, spline_and_hatch, spline_only, hatch_only",
      "default": "spline_and_hatch"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_iges_layers_with_id",
      "description": "Yes - Exports interface IDs of layers as IGES levels.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_iges_split_gtol",
      "description": "Determines how the content of gtol frames and additional text are exported to IGES. Yes* - gtol frames content and additional text are exported as separate text entities. no - gtol frames content and additional text are exported as a single text entity.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_image_format",
      "description": "If set to \"png\" shaded views will be exported as a PNG image and the background will be transparent. If set to \"jpeg\" shaded views will be exported as a JPEG image and the background will be opaque.",
      "values": "jpeg, png",
      "default": "png"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_line_width",
      "description": "YES - Exports line width information to DXF. NO - all entities are exported with the default width.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_linemerge_ign_layers",
      "description": "If set to yes overlapping lines will be merged regardless of their layers when exporting or plotting a drawing. If set to no overlapping lines belonging to different layers will not be merged.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_open_log_window",
      "description": "Yes - Opens Export Log File in special window. No - the Log File will not appear in the window.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_pdf_stroke_text_font",
      "description": "Defines how the TrueType and the non-TrueType text fonts are processed when drawings are exported as PDF files. non_ttf-reuse TrueType fonts and stroke only non-TrueType text fonts, all-stroke all fonts, none-reuse TrueType fonts and map non TrueType.",
      "values": "all, none, non_ttf",
      "default": "non_ttf"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_pdf_unicode",
      "description": "Specifies note texts encoding in PDF export. YES - Texts are exported in Unicode encoding. No - Texts are exported in native encoding.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_pdf_white_as_black",
      "description": "If set to yes drawing entities having white (255, 255, 255) color will be exported to PDF as black.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_pnt_ent",
      "description": "Yes - Exports a drawing point to IGES, DXF or DWG as a point entity. No - Exports a drawing point as shape entities.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_quilt_hl_priority",
      "description": "QUILT - quilt lines have higher priority than hidden lines when exporting or plotting a drawing. HIDDEN_LINE - hidden lines have higher priority than quilt lines.",
      "values": "quilt, hidden_line",
      "default": "quilt"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_splines_to_arcs",
      "description": "Yes - splines geometrically representing arcs will be exported as arcs. No - such splines will be exported as splines.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf2d_out_stroke_text",
      "description": "Strokes == text is converted to lines and dots. \"NONE\"- Does not stroke out the text for export. \"ALL\" - Strokes out all the text. \"SPECIAL\" - Strokes out only special characters.",
      "values": "all, none, special",
      "default": "none"
    },
    {
      "category": "Data Exchange",
      "name": "intf3d_ideas_import_filter",
      "description": "Enables UI to selectively import I-DEAS part and assembly models from the I-DEAS .mf1 and .pkg container files.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf3d_ideas_install_dir",
      "description": "Specifies the path for I-DEAS installation. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "intf3d_ideas_run_command",
      "description": "Specifies the I-DEAS run command. Default command is \"ideas\".",
      "values": "",
      "default": "ideas.cmd"
    },
    {
      "category": "Data Exchange",
      "name": "intf3d_in_enable_imp_validation",
      "description": "Yes*/no - Enables/disables reporting Import Validation failures in the Notification Center by default for newly imported/opened foreign models.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf3d_in_enable_layer_join",
      "description": "No - Join surfaces on import as geometry is loaded from file. Yes - Use new method to join surfaces by layer (surfaces contained on the same layer are joined together first) with a better chance of joining those surface elements to form closed geometry.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf3d_in_import_as_facets",
      "description": "Import faceted data for formats that support both facet and Brep representations.",
      "values": "yes, no, default",
      "default": "default"
    },
    {
      "category": "Data Exchange",
      "name": "intf3d_in_lock_redisplay",
      "description": "Provides the option to prevent the redisplay of models while they are in transitional state during Creo Elements/Direct file import.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf3d_out_cat2_ident_pt",
      "description": "Specifies model parameter IDENT_PT while exporting to Catia.",
      "values": "",
      "default": "-1.000000"
    },
    {
      "category": "Data Exchange",
      "name": "intf3d_out_configure_export",
      "description": "Yes Will automatically invoke UI to apply special model-level configuration during export.  No UI to apply special model-level configuration for export will not be invoked unless explicitly designated by the user during Save a Copy.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf3d_out_create_export_log",
      "description": "Generate or not an export log",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf3d_out_parameters",
      "description": "Exports parameters with models.",
      "values": "all, none, designated",
      "default": "all"
    },
    {
      "category": "Data Exchange",
      "name": "intf_cadds_import_make_solid",
      "description": "Allows the user to solidify all closed quilts during import CADDS5 model.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf_cadds_version",
      "description": "Allows the user to switch between the default and alternate converter version for interface with CADDS5",
      "values": "14, 15",
      "default": "14"
    },
    {
      "category": "Data Exchange",
      "name": "intf_generate_log_file",
      "description": "Specifies not to generate or generate short or long log files for data exchange import operations.",
      "values": "no, long, short",
      "default": "short"
    },
    {
      "category": "Data Exchange",
      "name": "intf_ignore_suffix_in_pvz",
      "description": "YES- the document type as suffix will not be appended to the part name in Creo View name during Save As to Workspace operation.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf_in_dwg_pnt_ent",
      "description": "Yes - Converts an IGES or DXF point entity to a drawing point.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf_in_dwg_view",
      "description": "Controls if associativity in an imported IGES view is preserved. 3D_VIEWS - tries to create 3D views if 3D model exists in the file. 2D_VIEWS - Imported IGES views work as 2D. No - Imported IGES views are exploded and become unrelated.",
      "values": "no, 2d_views, 3d_views",
      "default": "2d_views"
    },
    {
      "category": "Data Exchange",
      "name": "intf_in_extract_profiles",
      "description": "Default, no profiles in a data exchange file will be extracted for use.",
      "values": "all, none, comp",
      "default": "none"
    },
    {
      "category": "Data Exchange",
      "name": "intf_in_granite_direct_enable",
      "description": "Allows the user to switch back to the old 'Import Feature' method of reading Desktop .des files and Granite .g files into Creo. By default, Creo directly opens these models.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "intf_in_layer_asm_dialog",
      "description": "Yes - Presents a dialog box to control the import of both layers and assemblies. You can choose from the list of layers and/or solids available in the file to select one or more for import.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf_out_asm_mapped_item",
      "description": "Export assembly components and instances using MAPPED ITEM entity.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf_out_layer",
      "description": "Layer mapping mechanism providing an ability to group entities to layers or blocks.",
      "values": "none, part_layer, block_layer, block_nested_layer, block_view_based_layer, block_nested_view_based_layer",
      "default": "none"
    },
    {
      "category": "Data Exchange",
      "name": "intf_out_layer_rename_table",
      "description": "Enables you to assign interface ids to layers during export",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "intf_out_text_length",
      "description": "Sets text length in exported 2-D. As_is - Width of each character is width of strokes. Full_size - Width of each character is width of character text box. Adjusted - Adjusts spacing so no extra space left and end/start character do not overlap.",
      "values": "as_is, full_size, adjusted",
      "default": "full_size"
    },
    {
      "category": "Data Exchange",
      "name": "intf_pdf_u3d_create_u3d_files",
      "description": "YES - When exporting a Creo model as PDF U3D file, create a U3D file of the same name as the PDF file.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "intf_profile_dir",
      "description": "Specifies the directory where import and export profiles are stored. Use the full path to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "intf_use_variable_size",
      "description": "Yes - IGES,DXF,STEP files with variable sized sheet information are imported andput on the appropriate variable-size format. Without a sheet size, the system tries to apply the correct variable-size format.  No - The IGES,DXF,STEP drawing isplaced on a standard  sized format.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "medusa_2d_config_file",
      "description": "Specifies the Medusa 2D Interface config. file. Absolute or relative path to the file can be used.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "mentor_ver_2_0",
      "description": "Yes - Exports the file in IDF 2.0 format. No - Exports the file in IDF 1.0 format unless IDF 2.0 is selected from the ECAD FORMAT menu.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "pdf_linecap",
      "description": "0 - Butt cap: stroked lines are squared off at the endpoint of the path.  There is no projection beyond the end of the path.",
      "values": "butt, round, projecting square",
      "default": "butt"
    },
    {
      "category": "Data Exchange",
      "name": "pdf_linejoin",
      "description": "0 - Miter join: outer edges of the strokes for the two segments are extended until they meet at an angle.",
      "values": "round, miter, bevel",
      "default": "miter"
    },
    {
      "category": "Data Exchange",
      "name": "pdf_use_pentable",
      "description": "No - PDF export does not use any defined pentable changes as would be applied to plotting the drawing.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "pro_gplug_dir",
      "description": "Specifies the directory in which Granite application plug-ins are located. Use the full pathname to avoid problems.",
      "values": "",
      "default": "<creo_loadpoint>\\x86e_win64\\gplugs\\"
    },
    {
      "category": "Data Exchange",
      "name": "put_iges_drawing_entity",
      "description": "Specifies whether or not to suppress the output of the IGES drawing entity, #404, to the IGES file. No - The drawing entity is not output.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "restricted_symbol_palette",
      "description": "Controls the visibility of Save, Add to Palette, Move in Palette and Delete commands in the symbol palette. By Default, these commands are available.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "step_export_dwg_views",
      "description": "AS_3D_VIEWS - Export 3-D model geometry with its associative views. AS_3D_VIEWS_ASSOC_DRAFT - Export 3-D model geometry with its associative views and view related annotations. NO - Export only 2-D representations of the 3-D models. This is the default.",
      "values": "no, as_3d_views, as_3d_views_assoc_draft",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "step_out_suppl_geom",
      "description": "Export datum csys, planes, axes, points to the STEP file for formats ap203_e2, ap214_is",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "system_iges_header_file",
      "description": "Inserts specified text file into the Start section of IGES files (refer to user_iges_header_file). When used with user_iges_header_file, the system text appears first.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "tiff_compression",
      "description": "TIFF exports are done without compression.",
      "values": "none, g4, packbits, deflate",
      "default": "none"
    },
    {
      "category": "Data Exchange",
      "name": "tiff_type",
      "description": "Determines the type of tiff items are exported to variables refer to color sets",
      "values": "rgb, palette, grayscale, mono",
      "default": "rgb"
    },
    {
      "category": "Data Exchange",
      "name": "use_export_2d_dialog",
      "description": "Yes - Opens export options dialog when exporting Creo drawing. No - exports file without the options dialog.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "use_iges_font_1003",
      "description": "Used to disable the use of IGES font 1003.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "use_iges_kanji_font_2001",
      "description": "Specifies whether to convert Kanji notes in Creo to IGES Kanji notes (font code) when exporting. Yes - Converts Kanji notes to IGES Kanji notes. No - Converts using Font 1.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "user_iges_header_file",
      "description": "Filename - Insert specified text file into the Start section of IGES file. Valid parametric note symbols will be replaced during export. For example, &dwg_name in the text file is replaced by the drawing name when a drawing is exported.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "vrml_anchor_url",
      "description": "Enables you to place an anchor on a specified VRML component during the export to VRML. The keywords are optional.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Exchange",
      "name": "vrml_background_color",
      "description": "Yes - Exports a model to VRML with the Creo background color.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "vrml_explode_lines",
      "description": "Yes - Exports a model to VRML with explode lines for assembly or assembly process data.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Exchange",
      "name": "vrml_export_resolution",
      "description": "Specifies the number of levels of detail (LODs) in models exported in VRML format.",
      "values": "high, medium, low",
      "default": "medium"
    },
    {
      "category": "Data Exchange",
      "name": "vrml_export_version",
      "description": "Allows the user to choose between exporting to the VRML 2.0 or 1.0 format.",
      "values": "2.0, 1.0",
      "default": "2.0"
    },
    {
      "category": "Data Exchange",
      "name": "vrml_file_duplicate_material",
      "description": "Yes - Ensures that the model components retain their true color. No - In some viewers, component colors might not be consistent.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "vrml_multiple_views",
      "description": "All - Exports top-level and lower-level assembly component views into VRML format. None - Does not export component views into VRML format. Top - Exports top-level object view only into VRML format.",
      "values": "all, none, top",
      "default": "all"
    },
    {
      "category": "Data Exchange",
      "name": "vrml_parameters",
      "description": "Controls the export of user parameters. Designated - Export only designated parameters. All - Export all parameters. None - Do not export parameters.",
      "values": "all, none, designated",
      "default": "designated"
    },
    {
      "category": "Data Exchange",
      "name": "vrml_simprep_export",
      "description": "Yes - Specifies direct and in memory export of top-level assembly simplified representation to Pro/FLY-THROUGH package files.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "www_add_aux_frame",
      "description": "Creates additional frame for each process step or for assembly publication. Yes - Auxiliary files aux.html are created for each step in assembly process (in each step00 directory) to be replaced by your .html file. No - Auxiliary files are not created.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Exchange",
      "name": "www_export_geometry_as",
      "description": "Specifies the output format by to one of the values",
      "values": "all, vrml, cgm, jpg, cgm_vrml, jpg_vrml, cgm_jpg",
      "default": "jpg_vrml"
    },
    {
      "category": "Data Exchange",
      "name": "www_multiple_views",
      "description": "All - Writes all views in any component to the appropriate VRML files. Top - Writes only named views that reside in the assembly or process assembly to top-level VRML files. None - Does not write named views to VRML files.",
      "values": "all, none, top",
      "default": "top"
    },
    {
      "category": "Data Exchange",
      "name": "www_tree_location",
      "description": "Specifies the location of the model tree in the browser window. Out - Opens model tree in a separate window. In - Includes model tree in the Web page and removes the Tree checkbox from the control panel.",
      "values": "out, in",
      "default": "out"
    },
    {
      "category": "Data Management",
      "name": "allow_import_file_extension",
      "description": "Allow additonal files with extensions to be shown in the import dialog",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Management",
      "name": "bitmap_size",
      "description": "Works in conjunction with save_bitmap. Determines the size (squared) of the bitmap image that is stored.",
      "values": "",
      "default": "200"
    },
    {
      "category": "Data Management",
      "name": "dm_auto_open_zip",
      "description": "YES - Windchill CAD packages or zip files will open automatically. NO - User selects which file in contents to open.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Management",
      "name": "dm_cache_limit",
      "description": "Enter amount of disk space (in megabytes) to allocate for local file storage. The change to the existing setting will take effect after Creo is restarted.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Management",
      "name": "dm_cache_mode",
      "description": "Indicate which objects will be written to local cache when objects in Creo memory are saved.",
      "values": "all",
      "default": "all"
    },
    {
      "category": "Data Management",
      "name": "dm_checkout_on_the_fly",
      "description": "Controls the default action presented to the user when Check Out on the fly dialog comes up",
      "values": "checkout, continue",
      "default": "checkout"
    },
    {
      "category": "Data Management",
      "name": "dm_custom_checkin_prompt",
      "description": "Controls prompt for object types selection upon custom check in.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Management",
      "name": "dm_enable_revise_and_check_out",
      "description": "Option to enable or disable Revise and Checkout command",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Management",
      "name": "dm_fallback_server_location",
      "description": "Specifies the server location where objects will be saved when Creo does not provide an ability to specify the target save location. This option is applicable for Windchill ProductPoint only.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Management",
      "name": "dm_hide_virtual_default_ws",
      "description": "Yes - When there is at least one workspace created in any context in selected server, default workspaces that were never used, will not be listed. No - (Default value) Default workspaces will be listed for each context that has no workspace defined.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Management",
      "name": "dm_http_compression_level",
      "description": "Set the data compression factor (0-9, 0= no compression) for data exchange with a Windchill server.",
      "values": "",
      "default": ""
    },
    {
      "category": "Data Management",
      "name": "dm_network_request_size",
      "description": "Determines the maximum size, in bytes, of an HTTP upload request when uploading content files to Windchill. The value is an integer, greater than 0. The default is 8000000 (8MB).",
      "values": "",
      "default": "8000000"
    },
    {
      "category": "Data Management",
      "name": "dm_network_threads",
      "description": "Sets the number of concurrent threads system used for uploading and downloading data to and from Windchill. The value is an integer, greater than 0 and less than or equal to 10. The default is 6. Maximum value for IE is 10 and Chromium is 6.",
      "values": "",
      "default": "6"
    },
    {
      "category": "Data Management",
      "name": "dm_offline_after_event",
      "description": "Allow the user to choose to work offline when there is a loss of server connection. Staying online will continue to retry server operations.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Management",
      "name": "dm_offline_options_activated",
      "description": "Yes - Synchronize, Download and Upload boxes are checked when going online. No - Only Synchronize box is checked when going online.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Management",
      "name": "dm_overwrite_contents_on_update",
      "description": "Yes: Windchill Workspace Update will overwrite locally/modified out of date objects with the ones in the server. No (Default): Windchill Workspace Update will update metadata only.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Management",
      "name": "dm_remember_server",
      "description": "Primary server/workspace must be set by user for each Creo session.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Management",
      "name": "dm_save_as_attachment",
      "description": "Controls the default option for Save A Copy when models are saved as in non-Creo format. Yes - It will by default save it as secondary content attachment to the original CAD Document. No- It will by default save it as Primary CAD Document.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Management",
      "name": "dm_search_primary_server",
      "description": "Search the primary server for dependencies not found in the workspace.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Management",
      "name": "dm_secondary_upload",
      "description": "Indicate when modified Creo objects on a secondary server will be moved from the local cache to the user's workspace on the server.",
      "values": "automatic, explicit",
      "default": "automatic"
    },
    {
      "category": "Data Management",
      "name": "dm_synchronize_in_background",
      "description": "Yes: Enables workspace synchronization in the background. No (Default): Workspace synchronization will happen in the foreground.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Management",
      "name": "dm_update_unconfirmed_instances",
      "description": "Specifies when to force verification and save of unconfirmed assembly instances to data management system:    NEVER         - never;    CRITICAL_ONLY - only to correct or prevent doubtless data corruption;    ALWAYS        - whenever generic is saved",
      "values": "never, always, critical_only",
      "default": "never"
    },
    {
      "category": "Data Management",
      "name": "dm_upload_objects",
      "description": "Indicate when modified Creo Parametric objects will be moved from the local cache to the user workspace on the server.",
      "values": "automatic, explicit",
      "default": "explicit"
    },
    {
      "category": "Data Management",
      "name": "dm_ws_implicit_refresh",
      "description": "Automatically refresh workspace page after PDM actions are performed from Creo.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Management",
      "name": "hdic_autonumbering_disable",
      "description": "Disable automatic numbering for naming of objects created in HDIC",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Management",
      "name": "let_proe_rename_pdm_objects",
      "description": "Determines whether an object fetched from a PDM database can be renamed in a Creo session.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Management",
      "name": "pdm_rev",
      "description": "Specify how the system parameter, PDM_REV, should be formatted. Only useful for objects submitted to Pro/PDM or Pro/INTRALINK.",
      "values": "pdmrev_fmt_rev_ver, pdmrev_fmt_rev, pdmrev_fmt_branch_rev_ver, pdmrev_fmt_branch_rev",
      "default": "pdmrev_fmt_rev_ver"
    },
    {
      "category": "Data Management",
      "name": "read_parameters_of_excluded",
      "description": "Allow Creo designated parameters on excluded objects in Simplified Representation to be visible in Model Tree columns.",
      "values": "yes, no, common_name_only",
      "default": "no"
    },
    {
      "category": "Data Management",
      "name": "regenerate_read_only_objects",
      "description": "Determines whether an object retrieved from PDM database with read only status can be regenerated in a Creo session.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Data Management",
      "name": "retain_common_name_on_copy",
      "description": "Common Name will be assigned based on the newly copied model's file name.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Data Management",
      "name": "save_bitmap",
      "description": "When performing a save on a model, determines what level of the assembly will have bitmap images created of modified components.",
      "values": "none, toplevelonly, alllevels",
      "default": "none"
    },
    {
      "category": "Data Management",
      "name": "save_bitmap_type",
      "description": "When performing a save on a model, determines the type of image file that is created for that model. Used with \"save_bitmap\" option.",
      "values": "cgm, bmp, tiff, gif, jpeg",
      "default": "bmp"
    },
    {
      "category": "Data Management",
      "name": "save_unchanged_pdm_object",
      "description": "Determines how to save in the current working directory an object fetched from a Pro/PDM database into a Creo session.",
      "values": "as_ref, as_copy",
      "default": "as_ref"
    },
    {
      "category": "Data Management",
      "name": "sync_data_import_profile",
      "description": "Defines how open of non-Creo model takes import profile into account. Never-do not synchronize to the latest import profile. Update-update to the latest import profile. Recreate-(available only in dBatch)recreate the wrapper based on the latest import profile.",
      "values": "never, update, recreate",
      "default": "never"
    },
    {
      "category": "Design Manager",
      "name": "dont_show_symbol_nodes",
      "description": "Do not show references derived from relations in Parent/Child viewer.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "allow_rfs_default_gtols_always",
      "description": "Yes - Enables RFS/Default gtols to be created even when not permitted by ANSI standard.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "ang_dim_in_screen",
      "description": "Yes - If the display is in the default pan/zoom setting (View>Pan/Zoom>Reset), the system checks whether an angular dimension is visible on the screen. If it is not visible, then the system moves the dimension to a visible location.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "angular_tol",
      "description": "An alternative format for setting default angular tolerance dimensions. The value sets the number of decimal places, and the tolerance is the actual tolerance value. For integer dimensions, the value is zero, and the tolerance is an integer.",
      "values": "",
      "default": "0.000000"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "angular_tol_0.0",
      "description": "Sets the default tolerance for angular dimensions. Each option sets a tolerance for a specific decimal place. The value is the place of the last decimal.",
      "values": "",
      "default": "5.000000"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "angular_tol_0.00",
      "description": "Sets the default tolerance for angular dimensions. Each option sets a tolerance for a specific decimal place. The value is the place of the last decimal.",
      "values": "",
      "default": "50.000000"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "angular_tol_0.000",
      "description": "Sets the default tolerance for angular dimensions. Each option sets a tolerance for a specific decimal place. The value is the place of the last decimal.",
      "values": "",
      "default": "500.000000"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "angular_tol_0.0000",
      "description": "Sets the default tolerance for angular dimensions. Each option sets a tolerance for a specific decimal place. The value is the place of the last decimal.",
      "values": "",
      "default": "5000.000000"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "angular_tol_0.00000",
      "description": "Sets the default tolerance for angular dimensions. Each option sets a tolerance for a specific decimal place. The value is the place of the last decimal.",
      "values": "",
      "default": "50000.000000"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "angular_tol_0.000000",
      "description": "Sets the default tolerance for angular dimensions. Each option sets a tolerance for a specific decimal place. The value is the place of the last decimal.",
      "values": "",
      "default": "500000.000000"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "create_fraction_dim",
      "description": "Yes - All dimensions created will be displayed as fractions.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "default_ang_units",
      "description": "Sets the display of newly created angular dimensions both in the model and in the drawing. There is no impact on dimensions previously created. ang_deg - Decimal degrees.  ang_min - Degrees and decimal minutes ang_sec - Degrees, minutes, and decimal seconds",
      "values": "ang_deg, ang_min, ang_sec",
      "default": "ang_deg"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "default_dec_places",
      "description": "Sets the default number of decimal places (0-13) to which to round newly created dimensions. Unrounded dimensions automatically determine the number of decimal places required to display their stored value.",
      "values": "",
      "default": "2"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "default_dim_num_digits_changes",
      "description": "If set to yes, then the Decimal Places command will set the config option default_dec_places in the current session to the chosen number in addition to applying it to the text.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "default_gtol_owned_by_model",
      "description": "Defines the default destination of a GTOL created in the drawing environment. No-Destination is the drawing. Yes-Destination is the top model.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "default_iso_tol_table_type",
      "description": "Set the default type of ISO tolerance table that will be used when setting ISO/DIN tolerancing standard for a drawing or a model.",
      "values": "none, general, broken_edge",
      "default": "general"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "default_placement_surfacefinish",
      "description": "Sets the default placement type for surface finishes within the surface finish UI.",
      "values": "with_leaders, on_entity, normal_to_entity, free",
      "default": "normal_to_entity"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "dim_fraction_denominator",
      "description": "Sets the largest denominator to be used for fractional dimensions. If the fraction can be reduced, then it converts to the lowest possible denominator (for example, 4/32 converts to 1/8).",
      "values": "",
      "default": "1/32"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "dim_fraction_format",
      "description": "Std - Displays fractional dimensions in the standard Creo format. Aisc - Displays fractional dimensions in the American Institute of Steel Construction (AISC) format and displays architectural units in AISC format for feet-inches.",
      "values": "std, aisc",
      "default": "std"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "dim_offscreen_limit",
      "description": "If more than zero, sets the margin beyond which dimensions are automatically snapped back onto the screen.  For example, a value of .2 lets a dimension be 20% of the window size outside the window.  If set to zero, disables snapping of offscreen dimensions.",
      "values": "",
      "default": "0.200000"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "display_tol_by_1000",
      "description": "If set to Yes, tolerances for non-angular dimensions will be displayed multiplied by 1000.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "gtol_dim_placement",
      "description": "Controls display of geometric tolerances in Part. Use like drawing set-up option of the same name. On_bottom - Gtols display at bottom (below additional lines of text). Under_value - Gtols display under dimension value (above additional lines of text).",
      "values": "on_bottom, under_value",
      "default": "on_bottom"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "linear_tol",
      "description": "An alternate format for setting default linear tolerance dimensions. First value sets the number of decimal places. Second value is the actual tolerance. For example, 6 0.000025 sets tolerance to six decimal places. The default tolerance is 0.000025.",
      "values": "",
      "default": "0.000000 -1"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "linear_tol_0.0",
      "description": "Specify a range for default tolerances of linear and angular dimensions. These values affect only models created after the tolerance options are specified in the configuration file.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "linear_tol_0.00",
      "description": "Specify a range for default tolerances of linear and angular dimensions. These values affect only models created after the tolerance options are specified in the configuration file.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "linear_tol_0.000",
      "description": "Specify a range for default tolerances of linear and angular dimensions. These values affect only models created after the tolerance options are specified in the configuration file.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "linear_tol_0.0000",
      "description": "Specify a range for default tolerances of linear and angular dimensions. These values affect only models created after the tolerance options are specified in the configuration file.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "linear_tol_0.00000",
      "description": "Specify a range for default tolerances of linear and angular dimensions. These values affect only models created after the tolerance options are specified in the configuration file.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "linear_tol_0.000000",
      "description": "Specify a range for default tolerances of linear and angular dimensions. These values affect only models created after the tolerance options are specified in the configuration file.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "maintain_dim_tol_values",
      "description": "Maintains the tolerance values of a dimension regardless of the changes you make to the nominal value.",
      "values": "yes, no, legacy",
      "default": "yes"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "maintain_limit_tol_nominal",
      "description": "Maintains the nominal value of a dimension regardless of the changes that you make to the tolerance values.",
      "values": "yes, no, tol_tables",
      "default": "no"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "mark_approximate_dims",
      "description": "Yes - Displays a tilde (~) in front of a dimension that is set to display as a fraction and has an actual value that is not rounded to equate exactly to the displayed fractional value (the fraction shows 7/32 but the actual value is .22, not 0.21875).",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "minimum_angle_dimension",
      "description": "Controls the minimum angle value under which Creo assumes colinearity of the selected items when creating a driven dimension.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "parenthesize_ref_dim",
      "description": "Encloses reference dimensions in parentheses. No - Follows reference dimensions with the text \"REF\".",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "round_displayed_dim_values",
      "description": "Sets the default status of the Rounded Dimension Value checkbox for newly created or shown dimensions.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "select_newly_created_dims",
      "description": "Controls whether all newly created dimensions are selected when dimension creation is completed.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "tbl_driven_tol_val_edit",
      "description": "Tbl_driven_tol_val_edit Y/N* - \"Yes\" allows users to directly edit the tolerance value of dimensions whose tolerance values are driven by tolerance tables. Editing the tolerance value of a dimension will make the dimension non-table-driven. \"No\" disallows direct editing of the tolerance values of table driven tolerances.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "tol_display",
      "description": "Displays dimensions with or without tolerances.",
      "values": "yes, no, no_tol_tables",
      "default": "no"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "tolerance_class",
      "description": "Sets the default tolerance class for ISO-standard models. The system uses the tolerance class in conjunction with the dimension value when retrieving tolerances for General or Broken Edge dimensions.",
      "values": "medium, fine, coarse, very_coarse",
      "default": ""
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "tolerance_standard",
      "description": "Sets the tolerance standard used when creating the model.",
      "values": "ansi, iso",
      "default": "ansi"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "tolerance_table_dir",
      "description": "Sets the default directory for user-defined tolerance tables for ISO-standard models. All Holes and Shafts tables overwrite existing tables when loaded.",
      "values": "",
      "default": ""
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "use_major_units",
      "description": "Determines if fractional dimensions are displayed in feet-inches, such as 1' 3 1/2\" for 15.5 inches.  Used in retrieval of pre-Creo solids to set detail setup option, and used at runtime when setup value is 'default'.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Dimensions & Tolerances",
      "name": "use_nom_dim_val_in_expr",
      "description": "Yes - use dimensions' nominal values in expressions.  No - use current values.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "allow_move_attach_in_dtl_move",
      "description": "Yes - Move and Move Attach commands in drawing mode act together. No - Move and Move Attach commands in drawing mode do not act together.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "allow_move_view_with_move",
      "description": "Disallow the movement of drawing views with the mouse.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "allow_refs_to_geom_reps_in_drws",
      "description": "Yes - Allows you to create drawing references to geometry representations (includes dimensions, notes, and leaders). These references may become invalid if the referenced geometry changes resulting in geometry representations not updating in drawings.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "allow_vert_select_in_dim_create",
      "description": "Allow highlight of model vertices during dimension placement in drawings",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "attach_last_gtol_to_cursor",
      "description": "Yes - The last placed gtol will be selected and attached to the cursor while creating a new gtol. No - Behave as if the user did insert gtol in a new drawing/model. Meaning the default gtol will be selected and attached to the cursor.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "auto_constr_offset_tolerance",
      "description": "Sets the auto constraint tolerance for creating offset dimensions. If distance is less than this tolerance multiplied by component size, offset is set as coincident. Default value is 0.5 .",
      "values": "",
      "default": "0.500000"
    },
    {
      "category": "Drawing",
      "name": "auto_erase_set_datum_planes",
      "description": "no - set datum planes are automatically shown when a drawing view is placed.  yes - set datum planes are automatically erased when a drawing view is placed.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "auto_regen_views",
      "description": "Yes - Automatically repaints the drawing display when changing from one window to another. No - Update to drawing views will only occur when manual updates are made via Repaint or View> Update.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "autobuildz_enabled",
      "description": "Loads AutobuildZ application.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "bom_format",
      "description": "Sets the BOM format file to be used for a customized BOM.  Specify name and path.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\format.bft"
    },
    {
      "category": "Drawing",
      "name": "create_drawing_dims_only",
      "description": "Yes - Saves all new driven dimensions created in the drawing inside the drawing as associative draft dimensions. No - Saves driven dimensions created in Drawing mode on solid geometry in the solid.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "default_ang_dec_places",
      "description": "Sets the default number of decimal places (0-13) to which to round newly created angular dimensions. Unrounded angular dimensions automatically determine the number of decimal places required to display their stored value.",
      "values": "",
      "default": "1"
    },
    {
      "category": "Drawing",
      "name": "default_annotation_designation",
      "description": "Sets the default designation state of a new annotation.",
      "values": "none, designate, control_characteristics",
      "default": "none"
    },
    {
      "category": "Drawing",
      "name": "default_draw_scale",
      "description": "Sets the default drawing scale for views added with the No Scale command. The value must be greater than 0. No - The system does not set a default drawing scale.",
      "values": "",
      "default": "-1.000000"
    },
    {
      "category": "Drawing",
      "name": "default_font_kerning_in_drawing",
      "description": "Determines initial setting of Font kerning when 2D drawing annotations are created. Yes - Font kerning is on for new 2D annotations.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "disp_trimetric_dwg_mode_view",
      "description": "Displays the model in default orientation when placing a general view on the drawing. No - Model does not appear until Default is chosen from the Orientation dialog box.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "display_dwg_sketch_constraint",
      "description": "When set to yes, parametric sketching constraints, such as V for vertical, are displayed when a drawing object is selected",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "display_dwg_tol_tags",
      "description": "Sets the display of the tolerance tags that appear in drawings. This option does not affect the display of tolerances on dimensions.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "display_in_adding_view",
      "description": "Controls model display in a drawing when auto_regen_views is No. Wireframe - Adds new views in wireframe, displays datums. Minimal_wireframe - Displays in wireframe, no datums, axes, or silhouette edges. Default - Displays using the Environment setting.",
      "values": "default, wireframe, minimal_wireframe",
      "default": "wireframe"
    },
    {
      "category": "Drawing",
      "name": "draw_models_read_only",
      "description": "Yes - Drawing model files are read-only.  No model changes can be made.  Cosmetic_only - Only cosmetic changes can be made to the model.  Design changes are not allowed.  Cosmetic changes include adding driven dimensions, cross sections, and explode states.",
      "values": "yes, no, cosmetic_only",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "draw_points_in_model_units",
      "description": "Defines the current draft view's coordinate values as model units rather than drawing units. The GET POINT menu uses the scale of the draft view and the draft view's model units for relative and absolute coordinate entry and display in the Message Window.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "drawing_ole_image_dpi",
      "description": "Resolution of OLE object images. The range of valid values is 0 to 600 dots per inch.",
      "values": "",
      "default": "150"
    },
    {
      "category": "Drawing",
      "name": "drawing_setup_file",
      "description": "Sets the default drawing setup file option values for your Creo session, otherwise, the system uses the default drawing setup file option values. Certain parameters in the file are valid only if you have a license for Pro/DETAIL.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\prodetail.dtl"
    },
    {
      "category": "Drawing",
      "name": "drawing_shaded_view_dpi",
      "description": "Resolution of exported shaded drawing views.  The range of valid values is 0 to 600 dots per inch.",
      "values": "",
      "default": "150"
    },
    {
      "category": "Drawing",
      "name": "drawing_view_origin_csys",
      "description": "The named coordinate system will be used as the origin of a newly created view or of a modified view.  None - The system will not use a previously specified coordinate system.",
      "values": "none",
      "default": ""
    },
    {
      "category": "Drawing",
      "name": "drawing_warn_if_flex_feature",
      "description": "Display a warning dialog upon opening a drawing with models that contain flexible features advising users that annotations may be out of date and should be verified.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_disp_dwg_view_tooltips",
      "description": "Set whether to display tooltips when you move the pointer over drawing views.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_disp_vertices",
      "description": "Display vertices of selected sketch entities in drawing mode.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_sketch_coincident_guide",
      "description": "Show coincident guide.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_sketch_diagonal_guide",
      "description": "Show diagonal guide.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "dwg_sketch_equal_guide",
      "description": "Show equal length and equal radius guide.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_sketch_horizontal_guide",
      "description": "Show horizontal guide.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_sketch_instant_snap_to_geom",
      "description": "Enable instant snapping when the sketch cursor is placed next to geometry.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_sketch_midpoint_guide",
      "description": "Show midpoint guide.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_sketch_parallel_guide",
      "description": "Show parallel guide.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_sketch_perpendicular_guide",
      "description": "Show perpendicular guide.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_sketch_ribbon",
      "description": "Specifies the available sketching tools in Drawing mode. new - Modern sketching tools. legacy - Legacy sketching tools.",
      "values": "legacy, new",
      "default": "new"
    },
    {
      "category": "Drawing",
      "name": "dwg_sketch_snap_sensitivity",
      "description": "Adjusts the sensitivity of the snapping to geometry.",
      "values": "high, medium, low, very_high, very_low",
      "default": "very_high"
    },
    {
      "category": "Drawing",
      "name": "dwg_sketch_snap_to_model_geom",
      "description": "Allow snapping sketched entities to model geometry.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_sketch_tangent_guide",
      "description": "Show tangent guide.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_sketch_vertical_guide",
      "description": "Show vertical guide.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_tree_sort_views",
      "description": "Set the method for sorting drawing views that are listed in the Drawing Tree.",
      "values": "dont_sort, by_models, by_parent_views, by_both",
      "default": "dont_sort"
    },
    {
      "category": "Drawing",
      "name": "dwg_unicode_conversion_language",
      "description": "Defines the language used during Unicode conversion of pre-Wildfire 4.0 drawings.    This option does not affect the conversion of models.  File - Uses the language stored in the drawing header file; Session - Uses the language of the current Creo session.",
      "values": "file, session, english, japanese, french, german, russian, italian, spanish, korean, chinese_tw, chinese_cn, hebrew, greek, turkish, czech, polish, hungarian, slovenian, portuguese, slovak, usascii",
      "default": "file"
    },
    {
      "category": "Drawing",
      "name": "dwg_view_combined_state_tooltip",
      "description": "Set whether to display the name of the combined state name, in the tooltip of the drawing view. The name appears only when the drawing view is created using a combined state.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_view_explode_state_tooltip",
      "description": "Set whether to display the name of the explode state, in the tooltip of the drawing view. The name appears only when the drawing view for an assembly is in an explode state.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_view_model_name_tooltip",
      "description": "Set whether to display the model name of the view, in the tooltip of the drawing view. The model name appears only when the drawing contains more than one model.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_view_name_tooltip",
      "description": "Set whether to display the name of the view, in the tooltip of the drawing view.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "dwg_view_scale_tooltip",
      "description": "Set whether to display information about the scale of the view, in the tooltip of the drawing view.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "dwg_view_simp_rep_tooltip",
      "description": "Set whether to display the name of the simplified representation for the model, in the tooltip of the drawing view.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "dwg_view_type_tooltip",
      "description": "Set whether to display the type of the view, in the tooltip of the drawing view.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "enable_shaded_view_in_drawings",
      "description": "Yes - shading display is allowed in drawing views. No - shading display will be shown in wireframe.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "force_wireframe_in_drawings",
      "description": "Yes - Displays all views of drawings in wireframe. No - Displays views according to the display set for the session (wireframe, hidden, and so on).",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "format_setup_file",
      "description": "Assigns a specified setup file to each drawing format. To assign the drawing's parameter values to the format, you must retrieve the drawing's setup file into the format.",
      "values": "",
      "default": "dwgform.dtl"
    },
    {
      "category": "Drawing",
      "name": "highlight_erased_dwg_views",
      "description": "Controls the display of erased view outlines (environment option Highlight Erased Views). Yes - Highlights erased views. No - Turns off highlighting for erased views.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "highlight_new_dims",
      "description": "In drawing mode, highlights new dimensions in red until you repaint the screen.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "hlr_for_quilts",
      "description": "In Drawing, controls quilt display in hidden line removal. Yes - Includes quilts in the hidden line removal process (preselects Qlt HLR in the VIEW DISP menu). Default in the VIEW DISP menu, uses the value you have set.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "maintain_annotation_designation",
      "description": "Defines whether to keep the designation settings of the annotation when consuming it by an annotation feature or moving it from one annotation feature to another.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "make_aux_view_notes",
      "description": "Automatically adds view names to auxiliary views using AUX VIEW* viewname-viewname. You can modify the view name after adding the view to the drawing.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "make_parameters_from_fmt_tables",
      "description": "Determines the handling of values entered in a format table when you replace one drawing format with another. Yes - Stores entered values for format table and copies them with the table. No - Prompts you to re-enter all the values for the format table.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "make_proj_view_notes",
      "description": "Automatically adds view names to projection views in the format \"VIEW viewname-viewname.\" You can modify the view name after adding the view to the drawing.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "move_section_arrow_with_name",
      "description": "Moves cross section name and arrows together.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "ole_unlimit_zoom",
      "description": "Yes - The OLE object is displayed in any zoom level (could result in performance degradation). No - The OLE object disappears in high zoom-in levels.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "pick_chain_tangent_only",
      "description": "Specifies the extent of draft entity chains selected. Yes - Only entities in the chain that are tangent will be selected. No - All entities connected end to end will be selected.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "preferred_export_format",
      "description": "Set the default preferred export file type for export from drawings.",
      "values": "cgm, tiff, iges, dxf, step, pdf, dwg, medusa, stheno",
      "default": "pdf"
    },
    {
      "category": "Drawing",
      "name": "pro_dtl_setup_dir",
      "description": "Sets the directory for the drawing setup files. If this option is not set, the system uses the default setup directory.",
      "values": "",
      "default": ""
    },
    {
      "category": "Drawing",
      "name": "pro_format_dir",
      "description": "Sets the default directory for the drawing format library. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Drawing",
      "name": "pro_note_dir",
      "description": "Specifies the directory from which to retrieve notes entered from a file. Use the full path name to avoid problems.",
      "values": "",
      "default": "<dir_name>\\dump_x86e_win64\\"
    },
    {
      "category": "Drawing",
      "name": "pro_palette_dir",
      "description": "Sets the default directory for drawing symbol palette files.",
      "values": "",
      "default": "<creo_loadpoint>\\symbols\\palette\\"
    },
    {
      "category": "Drawing",
      "name": "pro_symbol_dir",
      "description": "Set and automatically create the default directory for saving and retrieving user-defined symbols. If you do not specify a directory, the system uses the current working directory. Use full path name to avoid problems.",
      "values": "",
      "default": "<dir_name>\\dump_x86e_win64\\"
    },
    {
      "category": "Drawing",
      "name": "pro_table_dir",
      "description": "Specifies the directory to be used when tables are retrieved or saved. Use the full path name to avoid problems.",
      "values": "",
      "default": "<dir_name>\\dump_x86e_win64\\"
    },
    {
      "category": "Drawing",
      "name": "remember_last_get_point_option",
      "description": "Yes - Sets the default of the GET POINT menu as the last option picked among Pick Pnt, Vertex and On Entity.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "replace_view_mdl_custom_scale",
      "description": "Controls automatic change in drawing view scale setting from \"Default scale for sheet\" to \"Custom scale\" while replacing the view model. No - View scale setting does not change. Yes - View scale setting automatically changes to preserve the scale value of the original model.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "save_display",
      "description": "Yes - Stores view geometry and detail items such as solid dimensions. These items are displayed when retrieving the drawing in View-Only mode.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "save_drawing_picture_file",
      "description": "Embed - Embeds a picture file inside a drawing for preview purposes. Export - Saves a drawing file as a picture file in the working directory when saving a drawing. Both - Does both embed and export.",
      "values": "no, export, embed, both",
      "default": "embed"
    },
    {
      "category": "Drawing",
      "name": "save_modified_draw_models_only",
      "description": "Determines whether the system saves the model after you have changed it. No - Saves the model every time that you store the drawing.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "select_hidden_edges_in_dwg",
      "description": "Controls selectability of hidden edges in no-hidden drawing views.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "selection_of_removed_entities",
      "description": "Yes - Entities in front of cross-section (planar or offset) can be selected, clipped (using Z-clipping), or erased with EDGE DISP menu. No - Geometry, datum points or curves, cosmetic features, threads, grooves, or coordinate systems cannot be erased.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "show_annotations_dialog_limit",
      "description": "Default value for Annotations dialog box.",
      "values": "",
      "default": ""
    },
    {
      "category": "Drawing",
      "name": "show_preview_default",
      "description": "This option determines the default behavior for preview in Show/Erase.",
      "values": "remove, keep",
      "default": "remove"
    },
    {
      "category": "Drawing",
      "name": "snap_drw_entity_to_snap_line",
      "description": "Yes - Enable snapping of drawing and report entities to snap lines. No - disable snapping of drawing and report entities to snap lines.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "switch_dims_for_notes",
      "description": "Yes - Dimensions will be displayed in their symbolic format during drawing note creation. No - Dimensions will be displayed in drawing notes as numerical values.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "sym_leader_orient_move_text",
      "description": "With Pro/DETAIL, automatically regroups weld symbol instances after you move the text.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "symbol_instance_palette_file",
      "description": "Specifies the location of the symbol instance palette.",
      "values": "",
      "default": ""
    },
    {
      "category": "Drawing",
      "name": "symbol_palette_input",
      "description": "Controls the display of the special symbol palette during note creation.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "todays_date_note_format",
      "description": "Controls the initial format of the date displayed in a drawing. The format for the setting is a string consisting of three portions: the year, the month, and the date. You can enter the portions in any order.",
      "values": "",
      "default": "%dd-%mmm-%yy"
    },
    {
      "category": "Drawing",
      "name": "tol_num_digits_default_driven",
      "description": "Yes - The Default check boxes in the number of digits area of the Dimension Properties dialog will be checked when a dimension is created or first shown. No - The check boxes will be unchecked when a dimension is created or first shown.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Drawing",
      "name": "triangulate_filled_areas",
      "description": "Subdivide filled areas into triangles (may affect memory usage and plot files).",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "variant_drawing_item_sizes",
      "description": "No - Drawing items moved/copied to a different sheet or located on a changed sheet keep same size and relative orientation on paper. Yes - Some items scale/reposition to be the same on paper, and others scale and/or reposition to be the same on screen.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "warn_if_iso_tol_missing",
      "description": "Yes - Returns the user to the dimension properties dialog to select a different table. No - Applies the tolerance according to existing functionality.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Drawing",
      "name": "zoom_to_selected_level",
      "description": "Scaling factor for the \"Zoom to Selected\" command. Value bigger than 1 increases the zoom level, showing less surrounding area. Value smaller than 1 decreases the zoom level, showing more surrounding area.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Education & Social Tools",
      "name": "enable_learning_connector",
      "description": "Enable the Learning Connector, which provides context specific access to videos, training, help topics, and technical support content.  When enabled, the Learning Connector is added to the ribbon bar next to Help.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "align_cable_bundles",
      "description": "Align NEWLY CREATED bundles where they meet or branch out",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "allow_bundle_flat_cables",
      "description": "Allow to create a bundle over a group of flat packing cables.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "allow_harn_mfg_assy_retrieval",
      "description": "Allow to retrieve a harness mfg assembly directly.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "allow_logical_spool_editing",
      "description": "Yes - Allow logical data spool parameters to be edited and the spool name to be renamed.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "assemble_parent_connector",
      "description": "Assemble parent connectors on locations referencing a subconnector.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "auto_assign_marker_designation",
      "description": "Automatically assigns the name of the default marker feature as a designation label to create a designated feature.  Yes - Automatically assigns the marker feature name to the marker feature tool. No - Does not automatically assign the marker feature name to the marker feature tool to create a designated feature.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "auto_assign_tiewrap_designation",
      "description": "Automatically assigns the name of the default tie wrap feature as a designation label to create a designated feature.  Yes - Automatically assigns the tie wrap feature name to the tie wrap feature tool. No - Does not automatically assign the tie wrap feature name to the tie wrap feature tool to create a designated feature.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "auto_convert_cables",
      "description": "Yes - When regenerating a pre-Release 11.0 cabling assembly, the system automatically creates a separate spool feature for every individual wire or cable in the assembly. No - An interface for the cable conversion appears.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "auto_xml_on_retrieve",
      "description": "Automatically load Cabling Logical Reference from an XML file when retrieving the cabling assembly",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "auto_xml_on_save",
      "description": "Automatically create an XML Logical Reference when saving a cabling assembly",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "autoroute_path_param_name",
      "description": "Set the wire parameter to use to select a path during autorouting.",
      "values": "",
      "default": "use_path"
    },
    {
      "category": "Electromechanical",
      "name": "bundle_transition_create_method",
      "description": "Control whether bundle transitions are created automatically. Default is automatic.",
      "values": "automatic, manual",
      "default": ""
    },
    {
      "category": "Electromechanical",
      "name": "cable_bundle_transition_length",
      "description": "Transition length is controlled by the formula Larger Diameter X <percentile>. Default value is 50&#91;0...250]%.",
      "values": "",
      "default": "0.500000"
    },
    {
      "category": "Electromechanical",
      "name": "cable_int_portions_for_clr",
      "description": "No - Global clearance checking for internal cable portions is excluded. Yes - Global clearance checking for internal cable portions is included.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "cable_jacket_termination",
      "description": "Ports - Cable jackets are routed between the entry ports. Network Ends - Cable jackets are terminated at the network ends.",
      "values": "ports, network ends",
      "default": "network ends"
    },
    {
      "category": "Electromechanical",
      "name": "cable_location_override_color",
      "description": "Override the system color of cable locations. Enter RGB values between 0 and 255 separated by space.",
      "values": "",
      "default": ""
    },
    {
      "category": "Electromechanical",
      "name": "cable_segment_override_color",
      "description": "Override the system color of cable segments that do not have a color map. Enter RGB values between 0 and 255 separated by space.",
      "values": "",
      "default": ""
    },
    {
      "category": "Electromechanical",
      "name": "cable_stripes_file",
      "description": "Sets the path for the striped appearance (.csv) file.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\cabling_data\\striped_cable\\cable_stripes.csv"
    },
    {
      "category": "Electromechanical",
      "name": "cables_with_hlr",
      "description": "Cables are not hidden behind objects.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "cabling_split_multi_pnt_locs",
      "description": "Setup whether to convert multiple-location features into single location features.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "compact_cables_packing",
      "description": "Setup whether the new packing of cables should be applied.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "compare_spools_by_name",
      "description": "Compare spools by names in logical compare.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "cti_class_color_file",
      "description": "Sets the CTI class color file for CTI class color display  during electrical clearance and creepage analysis.  Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Electromechanical",
      "name": "diagram_export_allow",
      "description": "Allows saving a copy of opened diagrams as a DGE file for using in Creo Schematics.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "diagram_pin_edit_multi_line",
      "description": "(Diagram)  Determines the Pro/TABLE format used when you are modifying pin parameters.   \"yes\" - You can add user-defined pin parameters by including them between the DEFINE and ENDDEF statements for each pin.   \"no\" - The system uses columnar format and",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "display_duplicate_harness_msg",
      "description": "Display warning message when duplicate harness are identified in the same assembly.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "display_internal_cable_portion",
      "description": "Yes - Internal cable portions will be displayed for any wires that have been manually set to Yes in the Cable Paths Setup dialog box for each individual splice and custom component. This option can be overridden in the Environment dialog box.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "display_route_cable_preview",
      "description": "If no then Route Cables tool does not display preview of cables as they are routed.  Otherwise Route Cables tool will show a preview of the path routed cables will follow.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "display_thick_cables",
      "description": "Yes - Display cables and wires with thickness. No - Display the centerline of cables and wires only. This option can be overridden in the Environment dialog box.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "edit_cable_stripes_file",
      "description": "Yes - Allows user to define new appearances, and edit and save appearances locally on their machine.  No - User can use appearances created by the librarian. Only librarian can define stripped appearances",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "enable_cable_channel",
      "description": "Activates channel functionality",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "fan_significant_locations_only",
      "description": "Setup whether only significant locations should be flattened on flattening a harness.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "fan_with_network",
      "description": "Setup whether the network should be included on flattening a harness.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "freeze_failed_cable_locations",
      "description": "Suspends the cable location at its last known assembly location.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "full_hlr_for_cables",
      "description": "Full - Removes hidden lines from view when cables hide other geometry (use when Hidden Line active). Partial - Cables hide other non-interfering cables except when cables route together between same locations. None - Display hidden lines (faster).",
      "values": "none, full, partial",
      "default": "full"
    },
    {
      "category": "Electromechanical",
      "name": "harn_mfg_branch_angle",
      "description": "Sets the default value for the branch location angle for the harness manufacturing. Enter a value between 10 and 130.",
      "values": "",
      "default": "80.000000"
    },
    {
      "category": "Electromechanical",
      "name": "harn_start_model_dir",
      "description": "Provides the complete path to the directory containing harness start parts and assemblies",
      "values": "",
      "default": ""
    },
    {
      "category": "Electromechanical",
      "name": "harn_tang_line_display",
      "description": "Display the tangency lines between cable segments in thick cable display mode.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "hlr_for_xhatches",
      "description": "Controls whether HLR to be enabled for crosshatches in drawing mode.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "ignore_bundles_in_find_cables",
      "description": "Include bundles and overbraids in the query results when the model or logical data is queried for unrouted items.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "limit_ref_des_label_reorder",
      "description": "Restricts the reordering of manually positioned Reference Designator Labels.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "network_location_override_color",
      "description": "Override the system color of network locations. Enter RGB values between 0 and 255 separated by space.",
      "values": "",
      "default": ""
    },
    {
      "category": "Electromechanical",
      "name": "network_segment_override_color",
      "description": "Override the system color of network segments. Enter RGB values between 0 and 255 separated by space.",
      "values": "",
      "default": ""
    },
    {
      "category": "Electromechanical",
      "name": "orthogonal_snap",
      "description": "Controls non-90 degree routing in Pro/DIAGRAM. Yes - Turns the Ortho Snap function on. You can sketch wires only at the default horizontal and vertical orientation. No - Enables you to sketch wires in drawings at angles other than the default.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "pro_cbltrm_dir",
      "description": "Sets the directory from which terminators are retrieved. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Electromechanical",
      "name": "pro_spool_dir",
      "description": "Sets the directory from which spools are retrieved. Use the full pathname to avoid problems.",
      "values": "",
      "default": "<dir_name>\\dump_x86e_win64\\"
    },
    {
      "category": "Electromechanical",
      "name": "prompt_add_to_main_bundle",
      "description": "Prompts the user if to automatically add a selected cable to the main bundle in addition to the branch bundle.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "prompt_extract_from_branches",
      "description": "Prompts the user if to automatically extract a selected cable from the branch bundle too.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "report_end_splice",
      "description": "Setup whether the terminal splices of cables are reported.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "ribbon_cable_flat_direction",
      "description": "Flat ribbon cables in the y-axis of entry ports.",
      "values": "y_axis, x_axis",
      "default": "y_axis"
    },
    {
      "category": "Electromechanical",
      "name": "smaller_bundle_min_bend_rad",
      "description": "Setup whether to consider the thickness of the bundle when set up the minimum bend radius.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "template_flat_harness",
      "description": "Specify the model used as the default flattened Harness assembly template.",
      "values": "",
      "default": ""
    },
    {
      "category": "Electromechanical",
      "name": "template_harnesspart",
      "description": "Specify the model used as the default Harness part template.",
      "values": "",
      "default": ""
    },
    {
      "category": "Electromechanical",
      "name": "terminator_table_out_unicode",
      "description": "YES - Unicode strings are exported in terminator table files, NO - Unicode strings are converted to ASCII characters for terminator table export.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Electromechanical",
      "name": "trace_thru_splice_connector",
      "description": "Report the from/to connectors of cables passing through splices correctly.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "update_harness_mfg_line_color",
      "description": "Update cable line color for harness-mfg part created in release 2000i or earlier.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "update_loom_bundle_data",
      "description": "Setup whether to update loom bundle data from old harnesses.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "update_pre_130_harness",
      "description": "Yes - When a cable is added between two previously laid out locations in a three-dimensional reference harness, display of the new cable will update automatically in pre-Release 13 flattened cable models.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Electromechanical",
      "name": "update_pre_16_cable_layers",
      "description": "Yes - Harnesses containing cables routed prior to Release 16.0 will be automatically updated upon retrieval to comply with new display standards.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Environment",
      "name": "accuracy_lower_bound",
      "description": "Enter an accuracy value to override the default lower limit.  The minimum value for accuracy is 1E-06.",
      "values": "",
      "default": "0.000100"
    },
    {
      "category": "Environment",
      "name": "activate_window_automatically",
      "description": "Yes - Execute Activate command automatically after a window is selected. No - Don't execute Activate command automatically after a window is selected.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "bell",
      "description": "Yes - Turns on the keyboard bell that rings after each prompt. No - Turns off the keyboard bell. To override this setting use the Environment dialog box on the Tools menu.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Environment",
      "name": "clearance_triangulation",
      "description": "Specifies the quality of surface triangulation used to obtain initial guess points for clearance and interference calculations.",
      "values": "none, high, medium, low, highest",
      "default": "none"
    },
    {
      "category": "Environment",
      "name": "clock",
      "description": "Yes - Displays the clock while Creo is working.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Environment",
      "name": "company_name",
      "description": "Used with the export option iges_out_mil_d_28000. To support MIL-D-28000, your company name is required input and the system prompts you every time you export through IGES unless you set the company name in your configuration file.",
      "values": "",
      "default": ""
    },
    {
      "category": "Environment",
      "name": "creo_ansys_cache_folder",
      "description": "The location of the folder to store the saved solver data.",
      "values": "",
      "default": ""
    },
    {
      "category": "Environment",
      "name": "creo_ansys_run_folder",
      "description": "The location of the folder to store the temporary solver data.",
      "values": "",
      "default": ""
    },
    {
      "category": "Environment",
      "name": "default_abs_accuracy",
      "description": "Defines the default absolute part accuracy. A default value of 0.0 creates a new empty part with an accuracy of 0.00039 inches, unless another value is defined.",
      "values": "",
      "default": "0.000000"
    },
    {
      "category": "Environment",
      "name": "default_hatch_type",
      "description": "xch - Sets the default type of hatch created in models and drawings to Creo native format (*.xch), pat- Sets it to PAT (*.pat).",
      "values": "xch, pat",
      "default": "xch"
    },
    {
      "category": "Environment",
      "name": "des_exp_check_saveconflicts_cp",
      "description": "Yes - conflict dialogs relevant for Save (regeneration, failure, mass properties etc) appear on checkpoint creation if applicable. No - if possible, conflicts are resolved silently, allowing CP creation.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Environment",
      "name": "des_exp_confirm_on_save",
      "description": "When you use a `Save` command during a Design Exploration session, it does not save the session, it prompts to add a new checkpoint.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "des_exp_create_auto_cps",
      "description": "Set the maximum number of automatically created checkpoints allowed. Additional checkpoints override previous checkpoints. Type a value from 1 to 99. Type 0 to prevent automatic checkpoint creation.",
      "values": "",
      "default": ""
    },
    {
      "category": "Environment",
      "name": "des_exp_create_backups",
      "description": "Back up all models in session when starting Design Exploration and all models opened and modified during the session. When backup is on, starting a Design Exploration session might take some time.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Environment",
      "name": "des_exp_data_path",
      "description": "Sets the directory for the Design Exploration session. The default location is in a default system folder. Type a valid file path to change the directory to a user defined one. Data from only one session is stored.",
      "values": "",
      "default": ""
    },
    {
      "category": "Environment",
      "name": "des_exp_display_type",
      "description": "Set the default display of the Checkpoint Tree. 'Tree' - Displays all branches in the Checkpoint Tree. 'Timeline' - Displays checkpoints in chronological order (des_exp_display_type).",
      "values": "tree, timeline",
      "default": "tree"
    },
    {
      "category": "Environment",
      "name": "des_exp_show_cp_props_dialog",
      "description": "Open the Checkpoint Properties dialog box when you add a new checkpoint, or turn an automatic checkpoint into a regular one.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "display_annotations",
      "description": "Determines whether or not annotations are displayed in 3D models.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "display_full_object_path",
      "description": "Controls the display of the object's full file name (including its object-type suffix and its version number) and file path in the window title and Model Info display. Yes - Displays full file name and file path. No - Displays object name only.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Environment",
      "name": "display_model_anls_selection",
      "description": "Determines whether or not to highlight the selected components during a Model Analysis.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Environment",
      "name": "dwg_show_screentip",
      "description": "Controls the display of a hyperlink screen tip. yes* - Displays a screen tip when you move the pointer over the hyperlink. no - Improves the zoom and pan performance on large drawings.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "flip_arrow_scale",
      "description": "Sets a scale factor for enlarging the size of the flip arrow that appears for feature creation direction (default = 1).",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Environment",
      "name": "hatch_pattern_cfg_file",
      "description": "Specifies the hatch pattern configuration file to be loaded when Creo is started.",
      "values": "",
      "default": ""
    },
    {
      "category": "Environment",
      "name": "highlight_failed_3d_annotations",
      "description": "Failed annotations are highlighted in the geometry area of 3D models.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "highlight_geometry",
      "description": "Yes - Items selected in the model tree are highlighted in the geometry area.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "info_output_format",
      "description": "Setup the default format type for information presentation. Text - information will be output as simple text. HTML - information will be output as html data.",
      "values": "text, html",
      "default": "html"
    },
    {
      "category": "Environment",
      "name": "info_output_mode",
      "description": "Sets default method for presenting information. Both - View information on screen and write information to file. Screen - View information on screen only. File - Write information to file only. Choose - Select method from the INFO OUTPUT menu.",
      "values": "both, choose, screen, file",
      "default": "both"
    },
    {
      "category": "Environment",
      "name": "intelligent_fastener_enabled",
      "description": "Enables Intelligent Fastener. You must restart Creo for the setting to take effect.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "mass_property_calculate",
      "description": "Defines calculation of Mass properties. Automatic - on each regeneration;  report_outdateness_only - outdated mass properties notification is shown;  by_request - upon user request; check_upon_save -prompt upon save if mass  properties are not calculated.",
      "values": "automatic, by_request, check_upon_save, report_outdateness_only",
      "default": "by_request"
    },
    {
      "category": "Environment",
      "name": "mathcad_automapping",
      "description": "Toggles Mathcad analysis automapping of variables",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Environment",
      "name": "mdx_collision_num_triangles",
      "description": "The number of mesh triangles which are used to approximate model in collision detection.",
      "values": "",
      "default": "1000"
    },
    {
      "category": "Environment",
      "name": "measure_sig_figures",
      "description": "Sets the number of significant figures displayed as results when using the Measure dialog box from the Info menu.",
      "values": "",
      "default": "6"
    },
    {
      "category": "Environment",
      "name": "model_grid_balloon_display",
      "description": "Controls the display of grid balloons.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "model_grid_neg_prefix",
      "description": "Enables you to specify the prefix to use for negative numbers in the balloon capture of the grid.",
      "values": "",
      "default": "-"
    },
    {
      "category": "Environment",
      "name": "model_grid_num_dig",
      "description": "Controls the number of decimal places displayed in the balloon capture. 0 - Only integers display.",
      "values": "",
      "default": ""
    },
    {
      "category": "Environment",
      "name": "model_grid_spacing",
      "description": "Sets the default model grid spacing.",
      "values": "",
      "default": "1.500000"
    },
    {
      "category": "Environment",
      "name": "model_notes_as_labels",
      "description": "Gives the option to display notes as either full text or as label. Can also be toggled with environment option \"Display Notes as Names.\"",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Environment",
      "name": "model_tree_start",
      "description": "Toggles display of the Model Tree. Yes - Displays the Model Tree window along with its model. No - Does not display the Model Tree window.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "modelcheck_enabled",
      "description": "Enable ModelCHECK",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "modify_abs_accur_on_interpret",
      "description": "Absolute accuracy value will be converted on Set Units -> Interpret operation.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "modify_abs_accuracy_on_convert",
      "description": "Absolute accuracy value will be converted on Set Units -> Convert operation",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "modify_abs_accuracy_on_scale",
      "description": "Absolute accuracy value will be scaled on Scale Model operation.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Environment",
      "name": "mp_auto_update_precreo_models",
      "description": "no - Creo does not recalculate the mass properties of legacy parts upon retrieval of a model.  yes - Creo recalculates mass properties of legacy parts upon retrieval of a model except for legacy parts with no assigned density.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Environment",
      "name": "part_mp_calc_ignore_alt_mp",
      "description": "Yes (default) - Creo uses the calculated mass (mass=volume*density) to calculate part mass properties. No - Creo uses the user-defined value of PRO_MP_ALT_MASS if the value of PRO_MP_SOURCE is Geometry and Parameters or Fully Assigned.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "prehighlight",
      "description": "Yes - Selectable items beneath the pointer are highlighted prior to being selected. No - Selectable items beneath the pointer are not highlighted prior to being selected.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Environment",
      "name": "prehighlight_tree",
      "description": "Default value for \"Preselection Highlighting\" option in the model tree, layer tree, detail tree and layout tree. When enabled, selectable items are highlighted prior to being selected in the tree.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Environment",
      "name": "pro_unit_length",
      "description": "Sets the default units for new objects.",
      "values": "unit_inch, unit_foot, unit_mm, unit_cm, unit_m",
      "default": "unit_inch"
    },
    {
      "category": "Environment",
      "name": "pro_unit_mass",
      "description": "Sets the default units for mass for new objects.",
      "values": "unit_ounce, unit_pound, unit_ton, unit_gram, unit_kilogram, unit_tonne",
      "default": "unit_pound"
    },
    {
      "category": "Environment",
      "name": "pro_unit_sys",
      "description": "Specifies the default system of units for new models.",
      "values": "mks, cgs, mmns, fps, ips, proe_def, mmks",
      "default": ""
    },
    {
      "category": "Environment",
      "name": "proe_memory_buffer_size",
      "description": "Specify the size in megabytes of the memory buffer to be reserved by Creo for system out of memory condition. You must restart Creo for the change to take effect.",
      "values": "",
      "default": "50"
    },
    {
      "category": "Environment",
      "name": "regen_backup_directory",
      "description": "Specifies the directory in which the system stores regen_backup models. (See regen_backup_using_disk.) The primary default is the current directory, but if that directory is read-only, the secondary default is the /tmp directory.",
      "values": "",
      "default": ""
    },
    {
      "category": "Environment",
      "name": "regen_backup_using_disk",
      "description": "Specifies whether or not the system backs up the current model to disk before each regeneration.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Environment",
      "name": "save_section_surfaces",
      "description": "Yes - Save section surfaces with models. No - Do not save section surfaces with models.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "select_on_dtm_edges",
      "description": "All_modes - Select a datum plane by clicking on its visual boundary. Sketcher_only - Select a datum plane by clicking on its tag in modes other than Sketcher. If you use Query frequently, set this option to Sketcher_only.",
      "values": "all_modes, sketcher_only",
      "default": "all_modes"
    },
    {
      "category": "Environment",
      "name": "sensor_dataview_max_regen_tries",
      "description": "Sets the maximum number of regenerations for each set in the Sensor Data View tool.  Defaults to 1, should be increased for models that require multiple regenerations  to remove the \"need regen\" state. Values over 3 are not recommended due to performance.",
      "values": "",
      "default": "1"
    },
    {
      "category": "Environment",
      "name": "show_dim_sign",
      "description": "No - Dimension values always appear positive. Negative value creates geometry to opposite side. Yes - Entering negative value for dim displayed as negative creates geometry to same side. Dims for csys and datum point offsets always show neg/pos value.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Environment",
      "name": "show_selected_item_id",
      "description": "Show id of Creo and Sketcher geometry in query selection bin, collector and tool tip.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Environment",
      "name": "spin_center_display",
      "description": "Determines whether or not the spin center symbol displays.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "start_appmgr",
      "description": "Determines whether or not the application manager starts when Creo is started.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Environment",
      "name": "startup_check_for_visualization",
      "description": "Determines whether or not the visualization components are checked for installation upon startup.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Features",
      "name": "allow_anatomic_features",
      "description": "Allow the creation of pre-Pro/ENGINEER 2000i geometry features including ear, neck, lip, slot, flange, shaft, local push, radius dome and section dome.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Features",
      "name": "allow_fully_dependent_copy",
      "description": "Enables the usage of advanced copy/paste functionality to  control degree of dependency on the pasted object.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Features",
      "name": "allow_udf_style_cosm_threads",
      "description": "Defines the Cosmetic Thread user interface. Yes - Creates a Cosmetic Thread as a UDF. No - Creates a Cosmetic Thread as a Cosmetic Thread feature.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Features",
      "name": "angle_grid_interval",
      "description": "Modify grid space in angular units for handle movement.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Features",
      "name": "auto_add_remove",
      "description": "Allows Creo to automatically switch from add to remove of material for solid extrude and revolve during feature creation.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Features",
      "name": "autohide_copied_group_af",
      "description": "If set to yes, copying a feature group containing an Annotation feature will automatically hide the Annotation Features in the new group.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Features",
      "name": "autohide_external_sketch",
      "description": "If set to yes, a Sketch feature is automatically hidden after being used as external sketch for a sketch based feature.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Features",
      "name": "autoround_max_n_chains_per_feat",
      "description": "Determines the maximum number of edge chains that the Auto-Round algorithm will attempt to round in each Auto-Round member",
      "values": "",
      "default": "20"
    },
    {
      "category": "Features",
      "name": "centimeter_grid_interval",
      "description": "Modify grid space in centimeter units for handle movement.",
      "values": "",
      "default": "0.100000"
    },
    {
      "category": "Features",
      "name": "copy_set_datum_attr",
      "description": "If set to yes, allow to copy set datum associated with datum features..",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Features",
      "name": "default_dep_copy_option",
      "description": "Sets the default for copy dependency to either full or partial in the Mirror and Paste Special tools.",
      "values": "full_dep, dep_dim",
      "default": "dep_dim"
    },
    {
      "category": "Features",
      "name": "display_draggers",
      "description": "Display Dragger for Edit mode.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Features",
      "name": "dynamic_preview",
      "description": "Controls the default state of geometry preview within a feature tool. Attached/Unattached - Dynamic attached/unattached geometry preview will be enabled. No - Geometry preview will not be enabled.",
      "values": "no, attached, unattached",
      "default": "attached"
    },
    {
      "category": "Features",
      "name": "enable_auto_regen",
      "description": "Enable Auto Regeneration for Unified Edit Mode.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Features",
      "name": "enable_remove_notifications",
      "description": "Presents a notification dialog when the result of a Remove feature creates  a surface with a flipped normal, an intersection with non-adjacent geometry  or geom check errors.  Setting this option to no will not issue the notification.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Features",
      "name": "enable_tapered_extrude",
      "description": "Enables you to add a taper to an extrude feature by displaying the Add taper check box and the taper degree value box on the Extrude tab Options tab. yes - The Add taper check box is displayed. no - The Add taper check box is not displayed.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Features",
      "name": "fail_unattached_feature",
      "description": "Handles unattached protrusion and cuts, when retrieving pre-Release 15 models. Yes - When a part is retrieved, the system fails an unattached protrusion or cut. No - When a part is retrieved, the system does not fail an unattached protrusion or cut.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Features",
      "name": "feature_create_auto_begin",
      "description": "In feature creation, determines whether or not the Define button is automatically activated when you open the dialog box. Yes - Button is activated automatically. No - You select the button.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Features",
      "name": "feature_create_auto_ok",
      "description": "In feature creation, determines whether or not the system activates the dialog box OK button automatically when the last required element is defined. Yes - Button is activated automatically. No - You select the button.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Features",
      "name": "feature_type_default",
      "description": "It sets the solid or surface default type for feature creation. The Advanced option sets the default type for Extrude and Revolve to solid, and all others to Surface.",
      "values": "solid, advanced, surface",
      "default": "solid"
    },
    {
      "category": "Features",
      "name": "flex_maintain_solution_topology",
      "description": "Initial value for the \"Maintain solution topology\" option in created flexible modeling features.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Features",
      "name": "foot_grid_interval",
      "description": "Modify grid space in foot units for handle movement.",
      "values": "",
      "default": "0.083333"
    },
    {
      "category": "Features",
      "name": "hole_diameter_override",
      "description": "No- Uses hole-table-driven standard hole diameter value. Yes - Allows specifying the drilled hole value instead of the standard value.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Features",
      "name": "hole_file_resolution",
      "description": "Specify Hole tool to use external hole parameter (.hol) files.",
      "values": "replace_with_external, use_internal",
      "default": "replace_with_external"
    },
    {
      "category": "Features",
      "name": "hole_parameter_file_path",
      "description": "Specifies the directory path for a standard screw-size parameters (.hol) file to be loaded from disk. Use the full path name to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Features",
      "name": "inch_grid_interval",
      "description": "Modify grid space in inch units for handle movement.",
      "values": "",
      "default": "0.031250"
    },
    {
      "category": "Features",
      "name": "keep_info_datums",
      "description": "Sets the initial state of how the system treats datums and features created at run time.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Features",
      "name": "max_regen_time_attach_preview",
      "description": "Sets the maximum regeneration time for the dynamic attached preview.",
      "values": "",
      "default": "0.500000"
    },
    {
      "category": "Features",
      "name": "merge_type",
      "description": "Sets the default merge type surface merge operations.",
      "values": "join, intersect",
      "default": "intersect"
    },
    {
      "category": "Features",
      "name": "meter_grid_interval",
      "description": "Modify grid space in meter units for handle movement.",
      "values": "",
      "default": "0.001000"
    },
    {
      "category": "Features",
      "name": "millimeter_grid_interval",
      "description": "Modify grid space in millimeter units for handle movement.",
      "values": "",
      "default": "0.100000"
    },
    {
      "category": "Features",
      "name": "pro_group_dir",
      "description": "Sets the default directory for the user-defined feature (UDF) library. If not specified, your current working directory is the default. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Features",
      "name": "ratio_grid_interval",
      "description": "Modify grid space in percentage units for handle movement.",
      "values": "",
      "default": "0.050000"
    },
    {
      "category": "Features",
      "name": "show_geom_checks_on_creation",
      "description": "Yes - The SHOW ERRORS menu appears at the end of feature creation when the feature being created has Geometry Checks.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Features",
      "name": "show_old_feature_statuses",
      "description": "Allow usage of old feature statuses columns in model tree",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Features",
      "name": "troubleshooter_show_info_gcheck",
      "description": "When set to Yes this option will add a \"Show info items\" filter to the View panel in the Troubleshooter.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Features",
      "name": "udf_af_name_postfix",
      "description": "If set to yes, a sequential number will be appended to the name of annotation feature in group from Copy and UDF placement.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Features",
      "name": "user_defined_grid_interval",
      "description": "Modify grid space in user defined length units for handle movement.",
      "values": "",
      "default": "0.500000"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "analysis_crt_tmp_file_on_regen",
      "description": "Determines whether regeneration of analysis features creates/updates tmp files",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "browser_favorite",
      "description": "Specifies the directories visible in the file browser for quick navigation.  Use the full path to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "compress_output_files",
      "description": "Yes - Stores object files in a compressed format.  Note: Compressed files are usually smaller, buy may be larger,  than uncompressed files. Compressed files are slower to read and to write to.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "dir_cache_max",
      "description": "Specify the maximum number of directories to cache.  Larger values can speed up file access, but use more memory.",
      "values": "",
      "default": "256"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "disable_search_path_check",
      "description": "Controls whether the search path is checked for name conflicts when creating, renaming, or copying models. Name conflicts should be avoided because different models with the same name cannot be together in session.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "excel_analysis_directory",
      "description": "Sets the default directory for the MS Excel files to be used for Excel analysis calculations. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "excel_family_table_keep_file",
      "description": "Yes - in case of editing family table with excel, if saved excel file exist , will always update it.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "exec_prog_on_assem_retr",
      "description": "Execute pro/program for models during assembly retrieval.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "external_analysis_directory",
      "description": "Sets the default directory for the files to be used by External Analysis calculations.  Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "file_open_default_folder",
      "description": "Sets default dir for File>Open. Working_directory - Search working directory. In_session - Search objects in  session. Pro_library - Use only if Pro/LIBRARY is installed. Workspace - Use only with Pro/INTRALINK.  Commonspace - Use only with Pro/INTRALINK.",
      "values": "default, working_directory, in_session, pro_library, my_documents, desktop",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "file_open_default_view",
      "description": "Specify the initial Views setting as List or Details in the File dialog boxes.",
      "values": "list, details",
      "default": "list"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "file_open_preview_default",
      "description": "Controls whether the preview area is expanded by default when the file open dialog or local file browser is displayed.",
      "values": "expanded, collapsed",
      "default": "collapsed"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "file_open_preview_delay",
      "description": "The delay before a file selection is previewed, in tenths of a second.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "force_new_file_options_dialog",
      "description": "Force the use of the New File Options dialog.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "generate_viewable_on_save",
      "description": "Controls whether updated Creo View .edz files are automatically exported every time a model is saved.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "geometry_analysis_color_scheme",
      "description": "Specifies the location of the geometry analysis color scheme file.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "instance_search_exhaustive",
      "description": "Specifies extent of instance search. Yes - Include file type when entering instance name in File>Open: type in  input panel (e.g. inst_name.prt) or select in drop-down list. If no .idx files are found, only working dir is  searched; each generic is not.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "lang_propagate",
      "description": "Specifies language storage options. The option provides flexibility for objects that use a different language than the current",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "mathcad_analysis_directory",
      "description": "Sets the default directory for the Mathcad files to be used for Mathcad analysis calculations. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "menu_show_instances",
      "description": "Determines whether instance names listed in instance index files appear in file lists.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "mfg_start_model_dir",
      "description": "Provides the complete path to the directory containing mfg start assemblies.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "model_rename_template",
      "description": "Sets the default renaming convention for copied assemblies. The default new name is the old name appended with an underscore (_). Adding a template such as &#91;*a1*=*b1*] changes every occurrence of a1 to b1 (e.g. TOP_A1_BRACKET copies to TOP_B1_BRACKET).",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "modified_objs_in_new_dir",
      "description": "Yes- During Save a Copy operations, any modified object that is not renamed will be saved in the new directory.  No- Any modified object that is not renamed will be saved to the retrieval directory.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "non_creo_model_dependency_check",
      "description": "Check and warn in the Conflicts dialog.",
      "values": "ignore, warn_message, conflicts_dialog",
      "default": "conflicts_dialog"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "open_draw_simp_rep_by_default",
      "description": "Set to \"Yes\" to always invoke the open rep dialog when opening a drawing.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "open_simplified_rep_by_default",
      "description": "Retrieves a model in a specified representation. Yes - uses Open Rep dialog. No - retrieves the Master representation. Specified Name - retrieves the model in the specified representation name if it exists or the Default representation.",
      "values": "",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "override_store_back",
      "description": "Forces the storage of objects retrieved from other directories to the current working directory.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "placement_rep_by_default",
      "description": "Retrieves the assembled component in a specified representation. None - retrieves the representation specified in configuration option open_simplified_rep_by_default.",
      "values": "",
      "default": "none"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "preferred_save_as_type",
      "description": "Allows customizing the order of the Type selections found under File ->Save A Copy.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "pro_crosshatch_dir",
      "description": "Specifies a default directory for your cross-hatch library in which you can save cross-hatching patterns for later retrieval. Its value is the full path name of the default directory.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "pro_font_dir",
      "description": "Sets the default font directory (Creo will load all fonts in this directory into the drawing regardless of the contents of the system and working directories).",
      "values": "",
      "default": "<creo_loadpoint>\\text\\fonts\\"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "pro_library_dir",
      "description": "Sets the default directory for the Creo libraries (or any libraries you have built containing the proper index menu files). Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "pro_material_dir",
      "description": "Sets the default directory for the part material library. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "pro_surface_finish_dir",
      "description": "Sets the default directory for your user-defined surface finish symbols. Use the full pathname to avoid problems.",
      "values": "",
      "default": "<creo_loadpoint>\\symbols\\surffins\\"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "prompt_on_erase_not_disp",
      "description": "Specifies whether or not to display a prompt allowing you to save your undisplayed objects. This option is used in conjunction with the Erase > Not Displayed command on the File menu.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "propagate_change_to_parents",
      "description": "When saving objects with option save_objects set to Changed or Changed_and_specified, Creo verifies which models are. Yes - Any model that is a parent of a changed model is considered to be a changed model when determining what to save.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "read_famtab_file_on_retrieve",
      "description": "No - Ignores filename.ptd. Yes - Creates and saves filename.ptd and uses that file when retrieving the generic.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "regen_simp_retrieve",
      "description": "Regenerate the assembly when retrieving an assembly simplified representation. Yes - Regenerates the assembly on retreival.  No - The assembly is not regenerated on retrieval.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "rename_drawings_with_object",
      "description": "Controls whether the system copies associated drawings automatically with parts and assemblies.",
      "values": "none, both, part, assem",
      "default": "none"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "retain_display_memory",
      "description": "Determines if the display of an object currently on the screen is kept in memory when you quit the window. Doing so (yes) makes the retrieval of objects in memory faster.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "save_clipped_view",
      "description": "Yes - clipping status is saved with model. No - clipping status is not saved.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "save_dialog_for_existing_models",
      "description": "Controls whether the Save dialog is shown for models whose storage location is already known.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "save_file_iterations",
      "description": "Yes - Iterations of a file will be saved. No - Iterations of a file will not be saved.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "save_instance_accelerator",
      "description": "With family tables of solid parts, determines saving instance accelerators. None - Accelerator files not used. Explicit - Save when instance is explicitly saved. Saved objects - Save when objects were modified. Always - Always save.",
      "values": "none, explicit, always, saved_objects",
      "default": "saved_objects"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "save_model_display",
      "description": "Sets graphical data to be stored and controls what is visible on retrieval.  \t\t\t\tWireframe - Wireframe data is saved with model and no shading is visible on retrieval. Shading_lod - Shade data is created on retrieval while wireframe data is saved with model.",
      "values": "wireframe, shading_lod",
      "default": "shading_lod"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "save_object_in_current",
      "description": "Use with the override_store_back option. Yes - Objects retrieved from a directory where you do not have write permission will be stored in the current directory. No - These objects are not saved at all.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "save_objects",
      "description": "Determines when an object and its dependent objects (such as a part used in an assembly) are stored.",
      "values": "all, changed, changed_and_specified, changed_and_updated",
      "default": "changed_and_specified"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "saving_model_thumbnails",
      "description": "Enables saving of model thumbnails.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "search_path",
      "description": "Specifies list of directories to search (in order) for object/file retrieval. These directories, the working directory, and directories in search.pro file (refer to search_path_file) are Creo's search path. Use full path name to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "search_path_file",
      "description": "Specifies path to text file search.pro (a list of directory path names). The directories listed in search.pro, the working directory, and directories specified by search_path are Creo's search path. Use full path name to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "set_model_types_to_save",
      "description": "Determines which model types are used in the Save Changed command. The format is a list of extensions separated by spaces.",
      "values": "",
      "default": "asm prt drw sec mfg gph ipf cem"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "sg_parameters_dir",
      "description": "Path to directory that contains Materialise's SG+ parameters.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "start_model_dir",
      "description": "Provides the complete path to the directory containing start parts and assemblies.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_boardpart",
      "description": "Specify the model to use as the default new ECAD board template.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_designasm",
      "description": "Specifies the designated template assembly. Use full path to avoid problems.",
      "values": "",
      "default": "inlbs_asm_design_abs.asm"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_drawing",
      "description": "Specify the drawing used as the default drawing template.",
      "values": "",
      "default": "c_drawing.drw"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_ecadasm",
      "description": "Specify the model used as the default ECAD assembly template.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_ecadpart",
      "description": "Specify the model used as the default ECAD part template.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_instrumentasm",
      "description": "Specifies the designated template for instrumented assembly. Use full path to avoid problems.",
      "values": "",
      "default": "inlbs_asm_instr_abs.asm"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_mfgcast",
      "description": "Specify the model used as the default manufacturing cast template.",
      "values": "",
      "default": "inlbs_mfg_cast_abs.asm"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_mfgcmm",
      "description": "Specify the model used as the default manufacturing cmm template.",
      "values": "",
      "default": "inlbs_mfg_cmm_abs.asm"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_mfgemo",
      "description": "Specify the model used as the default manufacturing expert machinist template.",
      "values": "",
      "default": "inlbs_mfg_emo_abs.asm"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_mfgmold",
      "description": "Specify the model used as the default manufacturing mold template.",
      "values": "",
      "default": "inlbs_mfg_mold_abs.asm"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_mfgnc",
      "description": "Specify the model used as the default manufacturing assembly template.",
      "values": "",
      "default": "inlbs_mfg_nc_abs.asm"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_module",
      "description": "Specifies the default module template file.  Use full pathname to avoid problems.",
      "values": "",
      "default": "inlbs_asm_module_abs.asm"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_mold_layout",
      "description": "Specify the mold layout assembly used as a default template.",
      "values": "",
      "default": "inlbs_mold_lay_abs.asm"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_new_ecadasm",
      "description": "Specify the model to use as the default new ECAD assembly template.",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_sheetmetalpart",
      "description": "Specify the model used as the default sheetmetal part template.",
      "values": "",
      "default": "inlbs_part_sheetmetal_abs.prt"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_solidpart",
      "description": "Specify the model used as the default part template.",
      "values": "",
      "default": "inlbs_part_solid_abs.prt"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "template_topopt",
      "description": "Specify the model used as the default topology optimization part template.",
      "values": "",
      "default": "to_part_solid_abs.prt"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "thingworx_connector_config_file",
      "description": "Define the path to connection properties file of ThingWorx connector (Insight)",
      "values": "",
      "default": ""
    },
    {
      "category": "File Storage & Retrieval",
      "name": "update_accelerator_in_verify",
      "description": "No* - Does not update existing accelerators upon family table verification for changes. Yes - Update existingaccelerators upon family table verification for changes",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "use_outdated_accel_in_geom_rep",
      "description": "This option controls the usage of outdated accelerator files during retrieval of instances in geometry representation. Yes - Provides the fastest retrieval. No - Ensures accurate Retrieval.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "use_temp_dir_for_inst",
      "description": "Explicitly makes Creo use the Temp directory for regenerating instances of models.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "File Storage & Retrieval",
      "name": "verify_on_save_by_default",
      "description": "Yes - \"Verify Now\" action will be selected in the conflict dialog by default when an unverified family table instance is to be saved in PDM workspace.  No - \"Verify Now\" action will not be selected by default. The user may explicitly specify the \"Verify Now\" action in the conflict dialog.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Freestyle Feature",
      "name": "auto_del_doublets",
      "description": "Automatically delete created doublets in Freestyle features",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Freestyle Feature",
      "name": "freestyle_drag_performance",
      "description": "Yes - Improve performance during drag by temporarily reducing graphics quality. No - No reduction in graphics quality during drag.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Freestyle Feature",
      "name": "freestyle_max_faces",
      "description": "Set the maximum number of control mesh faces allowed to be imported into Freestyle",
      "values": "",
      "default": "15000"
    },
    {
      "category": "Freestyle Feature",
      "name": "freestyle_max_faces_res_lvl_3",
      "description": "Set the maximum number of control mesh faces allowed to be imported into Freestyle with a high resolution, level 3.",
      "values": "",
      "default": "1000"
    },
    {
      "category": "Generative",
      "name": "generative_animation_scale",
      "description": "Specifies the animation scale of the FEA deformation.",
      "values": "1, 3, 100, 2, 4, 5, 15, 10, 20, 50",
      "default": "5"
    },
    {
      "category": "Generative",
      "name": "generative_animation_speed",
      "description": "Specifies the animation speed of the FEA deformation.",
      "values": "1, 3, 2, 4, 5, 10, 0.5",
      "default": "1"
    },
    {
      "category": "Generative",
      "name": "generative_auto_optimization",
      "description": "Begin optimization automatically as soon as study is fully defined.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Generative",
      "name": "generative_final_fea",
      "description": "Specifies whether to perform high fidelity Finite Element Analysis pass for the computed result.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Generative",
      "name": "generative_number_cores",
      "description": "Sets the number of CPU cores to use during generative computations. If the value is 0, the number of cores is managed by the system.",
      "values": "",
      "default": ""
    },
    {
      "category": "Generative",
      "name": "generative_refresh_interval",
      "description": "Refresh interval for the optimization progress display in seconds.",
      "values": "",
      "default": "5"
    },
    {
      "category": "Generative",
      "name": "generative_web_app_url",
      "description": "Specifies the URL to establish connection with the Generative Design Extension web application.",
      "values": "",
      "default": ""
    },
    {
      "category": "Layers",
      "name": "add_lower_level_comps_to_layer",
      "description": "Setting this option to yes will check off the Favor Current Layer option, which allows lower level components to be added to top level layers.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Layers",
      "name": "blank_layer",
      "description": "Blanks specified layers when you begin a Creo session. The value is the layer ID.",
      "values": "",
      "default": ""
    },
    {
      "category": "Layers",
      "name": "collect_dims_in_active_layer",
      "description": "This config options allows dimensions to be collected on the active layer.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Layers",
      "name": "copy_submodel_layer_status",
      "description": "When copying display status of assembly layers into drawing, defines whether to copy the status of the selected assembly or to include the status of its sub-models. no* - does not include status of sub-models. yes - includes status of sub-models.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Layers",
      "name": "create_numbered_layers",
      "description": "Yes - Creates default layers named 1 through 32.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Layers",
      "name": "def_layer",
      "description": "Specifies default layer names for different types of items. The first value string is the layer type. The second value string is the layer name.",
      "values": "layer_assem_member, layer_assy_cut_feat, layer_axis, layer_chamfer_feat, layer_comp_design_model, layer_comp_fixture, layer_comp_workpiece, layer_copy_geom_feat, layer_corn_chamf_feat, layer_cosm_round_feat, layer_cosm_sketch, layer_csys, layer_curve, layer_curve_ent, layer_cut_feat, layer_datum, layer_datum_plane, layer_datum_point, layer_detail_item, layer_dgm_conn_comp, layer_dgm_highway, layer_dgm_rail, layer_dgm_wire, layer_dim, layer_draft_constr, layer_draft_dim, layer_draft_dtm, layer_draft_entity, layer_draft_feat, layer_draft_geom, layer_draft_grp, layer_draft_hidden, layer_draft_others, layer_draft_refdim, layer_driven_dim, layer_dwg_table, layer_ext_copy_geom_feat, layer_feature, layer_geom_feat, layer_gtol, layer_hole_feat, layer_intchg_funct, layer_intchg_simp, layer_nogeom_feat, layer_note, layer_parameter_dim, layer_part_refdim, layer_point, layer_protrusion_feat, layer_quilt, layer_refdim, layer_ribbon_feat, layer_rib_feat, layer_round_feat, layer_sfin, layer_shell_feat, layer_skeleton_model, layer_slot_feat, layer_snap_line, layer_solid_geom, layer_surface, layer_symbol, layer_thread_feat, layer_trim_line_feat, layer_weld_feat, layer_all_detail_items, layer_annotation_element, layer_axis_ent, layer_csys_ent, layer_set_datum_tag, layer_3d_items, layer_ae_driving_dim, layer_draft_xsec, layer_hole_thread, layer_body",
      "default": ""
    },
    {
      "category": "Layers",
      "name": "def_shown_layers_in_view",
      "description": "Sets the display state of layers when switching layer tree display from drawing to view, if no explicit display state is set in the context of the view.  all-all layers are displayed, drawing-layers state is copied from the drawing, none-all layers are hidden",
      "values": "all, none, drawing",
      "default": "all"
    },
    {
      "category": "Layers",
      "name": "default_layer_model",
      "description": "Name of the model which is used to drive rule-based layer placement of new items in all models of the same type in session.",
      "values": "",
      "default": ""
    },
    {
      "category": "Layers",
      "name": "display_layer",
      "description": "This causes the specified layers to display when you begin a Creo session. The variable \"value\" is the layer Id.",
      "values": "",
      "default": ""
    },
    {
      "category": "Layers",
      "name": "expand_all_with_nested_layers",
      "description": "Yes - expand all including nested sub layers.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Layers",
      "name": "highlight_layer_items",
      "description": "Yes - Items selected in the layer tree are highlighted in the geometry area.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Layers",
      "name": "layer_item_highlight_limit",
      "description": "Set the upper limit of items in a layer for highlighting.  If items in a layer exceeds this number, highlighting will not occur.",
      "values": "",
      "default": "500"
    },
    {
      "category": "Layers",
      "name": "save_display_status_in_submodel",
      "description": "If set to no, the top level assembly will store sub model layer display status, allowing lower level display status to be stored without having to save the sub models.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Layers",
      "name": "save_hidden_items_w_status",
      "description": "The items on the \"Hidden Items\" temporary layer are stored permanently when layer display status is saved with Save Status command.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Layout",
      "name": "change_color_of_inactive_layout",
      "description": "When set to yes, inactive layout content is shown using color specified by inactive_layout_color_value. When set to no, inactive layout content is shown using their native colors.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Layout",
      "name": "inactive_layout_color_value",
      "description": "Specifies the value of the color used for inactive layout content when the option change_color_of_inactive_layout is set to yes",
      "values": "",
      "default": "255 255 255"
    },
    {
      "category": "Layout",
      "name": "inactive_layout_transp_value",
      "description": "Specifies the transparency value to be used for inactive layout content. Range is 0 (no transparency) to 100 (fully transparent).",
      "values": "",
      "default": "50"
    },
    {
      "category": "Layout",
      "name": "layout_disp_vertices",
      "description": "Display vertices in Layout application",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Layout",
      "name": "layout_feat_copied_geom_thick",
      "description": "Layout feature - Copied geometry thickness.",
      "values": "1, 3, 2, 4, 5, 1.5, 2.5, 3.5, 4.5",
      "default": "1.5"
    },
    {
      "category": "Layout",
      "name": "layout_scroll_bars",
      "description": "Show/Hides scroll bars.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Layout",
      "name": "layout_snap",
      "description": "Enable/Disable snapping to geometry and guides.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Layout",
      "name": "layout_symbol_dir",
      "description": "Set and automatically create the default directory for saving and retrieving user-defined symbols. If you do not specify a directory, Layout will use the same directory as Creo drawings. Use full path name to avoid problems.",
      "values": "",
      "default": "<dir_name>\\dump_x86e_win64\\"
    },
    {
      "category": "Manufacturing",
      "name": "allow_mfg_in_assem_mode",
      "description": "Allows a manufacturing model to be opened in assembly mode from the file open dialog.  Use \"Open In Assembly Mode\" option in \"File Open\" dialog.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "assy_mfg_open_mode",
      "description": "No Default Application set for opening Assembly NC Models.",
      "values": "mfg, process, feature, any_mode",
      "default": "any_mode"
    },
    {
      "category": "Manufacturing",
      "name": "autodrill_udf_dir",
      "description": "Storage directory for holemaking MUDF's that are used by Pro/NC Auto-drilling functionality",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "autodrilling_config_filename",
      "description": "Retrieve automatically and load the configuration file for the auto-drilling table.",
      "values": "",
      "default": "autodrilling"
    },
    {
      "category": "Manufacturing",
      "name": "autodrilling_holestyle_param",
      "description": "Parameter name included in hole features of a manufacturing reference model.  The parameter value identifies the MUDF for holemaking that is automatically applied in Pro/NC to drill these holes.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "campost_dir",
      "description": "Specifies the CAM-Post load point directory to enable you to directly set-up the post-processors and generate MCD files.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "chk_part_surfs_profpock",
      "description": "Yes - Includes all reference part surfaces as check surfaces for profiling and pocketing NC sequences.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "cl_arrow_scale",
      "description": "Enables you to control the size of the tool path arrow for contouring NC sequences. 0 - The arrow does not display. Any other value - The arrow scales accordingly.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Manufacturing",
      "name": "cl_rotate_sign_convention",
      "description": "TOOL or TABLE - defines ROTATE sign direction convention based with respect to either rotation table or cutting tool.",
      "values": "table, tool",
      "default": "table"
    },
    {
      "category": "Manufacturing",
      "name": "cmm_custom_tool_param_file",
      "description": "Defines the file that contains the user-defined tool parameters' list.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "curve_traj_offset_opt_default",
      "description": "Enables default state of \"Offset Cut\" option for the trajectory sequence. \"ON\" - \"Offset Cut\" option is selected. \"OFF\" - the option is not selected. \"AUTO\" - the option state depends on the selected chain reference.",
      "values": "off, on, auto",
      "default": "auto"
    },
    {
      "category": "Manufacturing",
      "name": "disable_custom_tool_prm_warning",
      "description": "Disables launching user interaction dialog whose default option is always \"NO\" which keeps the existing user defined parameter file definitions.",
      "values": "yes, no, auto_update",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "display_mfg_icon_for_mfg_assy",
      "description": "Yes- Display manufacturing icon for manufacturing assembly files in Open/Save dialogs.  No- the manufacturing assembly files have assembly icons.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "dm_nc_process",
      "description": "Sets output of NC process information as content on the NC Assembly CAD Document in XML Format. Yes  - Outputs the file whenever CAD Document is Saved. No - Does not output the file.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "dm_nc_references",
      "description": "Sets whether reference relationships will be created in Windchill between the manufacturing model and its deliverables(CL file, tape file and DMIS file).",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Manufacturing",
      "name": "drilling_ui_end_opt_default",
      "description": "Defines default end option for holemaking sequences. \"AUTO\" - end is determined automatically, \"REFERENCE\" - end is determined by the selected reference, \"DEPTH\" - end is determined by the specified depth, \"THROUGH\" - machine through the part.",
      "values": "auto, through, reference, depth",
      "default": "auto"
    },
    {
      "category": "Manufacturing",
      "name": "drilling_ui_start_opt_default",
      "description": "Defines default start option for holemaking sequences. \"AUTO\" - start is determined automatically, \"REFERENCE\" - start is determined by the selected reference.",
      "values": "auto, reference",
      "default": "auto"
    },
    {
      "category": "Manufacturing",
      "name": "enable_2x_traj_multi_loops",
      "description": "Enables selection of loops on surfaces for curve trajectory sequence.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "enable_face_thread_turning",
      "description": "Allows/disallows face option for thread turning sequence.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "enable_param_n_tool_upd_dialog",
      "description": "Enable parameters and tool updation dialog.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Manufacturing",
      "name": "enable_pprint_seq_comment_end",
      "description": "Enables adding \"COMMENTS END\" to indicate end of NC sequence/operation comments.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "gpostpp_dir",
      "description": "Specifies the directory containing the post processor files to be used by Pro/NCPOST (GPOST).",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "ignore_templ_pos_for_new_tool",
      "description": "Ignore pocket number from template for tools added to a workcell. Use first available pocket.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "include_all_tools_in_list",
      "description": "Show/hide inapplicable cutting tools in mfg sequence UI.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_auto_ref_mfg_template",
      "description": "Enable/Disable auto referencing for Manufacturing template",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_auto_ref_prt_as_chk_srf",
      "description": "Yes - In 3, 4, and 5 axis contour and conventional mill sequences, the entire reference part is selected as check surfaces by default when computing the NC sequence toolpath for those sequences. No - You select the check surfaces.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_auto_retract_clear_dist",
      "description": "Specifies distance between automatically created retract plane and step coordinate system. Will be applied to the new steps created in process manager if operation retract cannot be used.",
      "values": "",
      "default": "-0.000000"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_circ_interpolate_gouge_fix",
      "description": "Yes - Avoids gouges when CIRC_INTERPOLATE parameter is set to ARC_ONLY or ARC_AND_POINTS when the arc is helical.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_cl_cmd_param_consider_units",
      "description": "Yes - take into account units for parameters used in CL command expressions.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_cl_euc_japanese_encode",
      "description": "Yes - Output cl-file Japanese characters in EUC encoding.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_comments_text_area_size",
      "description": "Controls the number of lines available for comments without scrolling in NC steps dashboard UI.",
      "values": "",
      "default": "8"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_custom_tool_param_file",
      "description": "Defines the file that contains the user-defined tool parameters' list.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "mfg_customize_dialog",
      "description": "Yes - Uses the new customize dialog box for customizing NC sequences. No - Uses the Release 19.0 menus.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_cutline_save_mesh",
      "description": "Yes - Save / Retrieve Mesh for subsequent cutline recalculations, No - New Mesh will be computed for each cutline recalculations.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_engrav_avoid_clines_tpath",
      "description": "The engraving toolpath skips the geometry center lines.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_ijk_num_digits",
      "description": "Sets the number of digits for i, j, k data points in a CL data file.",
      "values": "",
      "default": "10"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_info_location",
      "description": "top left /bottom right -Position of the mfg. Info dialog box.",
      "values": "top_left, bottom_right",
      "default": "top_left"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_modal_command_file",
      "description": "Enables you to make some of the APTn index topics modal, which means that you repeatedly get a list of major keywords corresponding to this topic upon completing a command line.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "mfg_param_auto_copy_from_tool",
      "description": "Do not copy any parameter of the tool to the sequence parameter tree.",
      "values": "all, none, misc, cutting",
      "default": "none"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_paste_special_dep_default",
      "description": "Controls the default state of the following option in Paste Special dialog: \"Make copies dependent on dimensions of originals\". This configuration option has an effect only for manufacturing assemblies.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_process_print_dir",
      "description": "Specifies the directory where Mfg Process html page get stored. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "mfg_process_sync_by_default",
      "description": "Specifies whether all steps created in the Process Manager get automatically synchronized with features in the Pro/NC assembly. You can change steps later in the dialog box open during the session.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_process_table_setup_dir",
      "description": "Specifies the directory where Mfg Process Table settings get stored. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "mfg_process_template_dir",
      "description": "Specifies the directory where Mfg Process Templates get stored. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "mfg_reaming_retract_feed_fix",
      "description": "Enables adding ZFEED for retract feed to reaming NC sequence.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_setup_dir",
      "description": "Specifies the directory which contains all manufacturing related setup files for the current session.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "mfg_stock_display_show_default",
      "description": "Sets the default visibility status of the Stock Model after creation.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_tap_mat_rem_coef",
      "description": "The factor is used to consider the threading of tapping tool. The estimate removed material value of tapping sequence is presented as estimate removed material value multiplied by this factor. The factor should be greater than 0 and upto 1.0.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_tbl_comment_from_retr_tool",
      "description": "Controls whether the mfg tool comment is getting copied from TOOL_COMMENT parameter of the retrieved tool to the tool manager table comment.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_template_dir",
      "description": "Specifies the storage directory for NC templates. Specify full path to avoid problems. NC templates are used in Expert Machinist. Templates store the recipe for a toolpath as the method of tool retrieval.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "mfg_tool_dialog_setup_file",
      "description": "Specifies the XML based file to setup Tool Dialog.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "mfg_tool_preview_by_pick",
      "description": "Enables preview of a milling tool at a specified location on the tool path or geometry of the part.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_turn_profile_trim_shape",
      "description": "Turn profile preview and actual turn profile display will be considered in both direction of start and end for turn profile edit.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_udf_info_setup_file",
      "description": "Specify name and path of the file containing udf and mfg criteria values .",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "mfg_volmill_const_pitch_helix",
      "description": "Generates a helical toolpath with constant pitch in Volume Milling.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_workpiece_transparency",
      "description": "Controls the workpiece transparency in shaded model display. You can change the value in the range between 0.1 and 1. The bigger the value, the more transparent the workpiece. The default value is 0.5.",
      "values": "",
      "default": "0.670000"
    },
    {
      "category": "Manufacturing",
      "name": "mfg_xyz_num_digits",
      "description": "Sets the number of digits for x, y, z data points in a CL data file.",
      "values": "",
      "default": "10"
    },
    {
      "category": "Manufacturing",
      "name": "nc_autodoc_param_dir",
      "description": "Location of the setup file that describes which process parameters are included in the parameter table.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "nc_autodoc_report_dir",
      "description": "Location for storing the report and images generated by the shop floor documentation tool.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "nc_autodoc_setup_dir",
      "description": "Location for documentation setup files that describe which process parameters are included in the parameter table.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "nc_autodoc_template_dir",
      "description": "Location of the style sheet and default images used for shop floor documentation.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "nc_jobman_visible",
      "description": "Yes - make \"Submit Path\" and \"Abort Path\" visible. No - make \"Submit Path\" and \"Abort Path\"  invisible.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "nccheck_type",
      "description": "ModuleWorks will be used for NC material removal simulation.",
      "values": "nccheck, moduleworks, external",
      "default": "moduleworks"
    },
    {
      "category": "Manufacturing",
      "name": "ncl_file_extension",
      "description": "Sets the default file extension for Pro/MFG CL data files. Enter the file extension only (without the preceding \".\"). For example, apt produces filename.apt.",
      "values": "",
      "default": "ncl"
    },
    {
      "category": "Manufacturing",
      "name": "ncmdl_bar_stock_part_path",
      "description": "Sets path for storage and retrieval of stock instances for creating workpiece in NC Model. Specify full path, including part name, to avoid problems.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\ncmdl_data\\ncmdl_bar.prt"
    },
    {
      "category": "Manufacturing",
      "name": "ncmdl_billet_stock_part_path",
      "description": "Sets path for storage and retrieval of stock instances for creating workpiece in NC Model. Specify full path, including part name, to avoid problems.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\ncmdl_data\\ncmdl_billet.prt"
    },
    {
      "category": "Manufacturing",
      "name": "ncpost_type",
      "description": "Set to GPOST to access the default post processor supplied with Pro/NCPOST.",
      "values": "gpost, ncpost",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "ncseq_outbound_curve",
      "description": "Yes - Create out bound curve.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "new_turn_scan_type",
      "description": "Allows to use New turn scan types for Turning NC sequences.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Manufacturing",
      "name": "output_mfg_xml",
      "description": "Allows export/import mfg model to/from xml file. Yes  - make Export/Import options visible. No - make them invisible.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "pro_mdb_dir",
      "description": "Sets the default directory for the Machinability Database (MDB) files. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "pro_mf_cl_dir",
      "description": "Sets the default directory for the manufacturing CL data files.Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "pro_mf_clamp_dir",
      "description": "Specifies the directory where the manufacturing clamps can be found.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "pro_mf_param_dir",
      "description": "Sets the default directory for the manufacturing parameter files. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "pro_mf_tape_dir",
      "description": "Sets the default directory for the manufacturing TAPE data files.Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "pro_mf_tprm_dir",
      "description": "Sets the default directory for the manufacturing tool files. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "pro_mf_workcell_dir",
      "description": "Sets the default directory for the manufacturing workcell files. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "pro_mfg_cmdsyn_dir",
      "description": "Sets the default directory for the syntax menu files in Pro/MFG. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "profile_output_utils",
      "description": "Affects CL-Data output for profile milling sequences. Yes - Sequence parameter output_point is available with options: tip - Toolpath is output with respect to the tool center; on_profile - Toolpath is output with respect to the profile of the tool.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "proncpost_dbf",
      "description": "Enter directory path to NCPost database file.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "prorembatch_queue_manager",
      "description": "Enables toolpath computation on a separate host machine. Required values are Processor name, Remote machine's hostname, Type of transport (always 0), RPC processor number (same as that of remote processor), Version of queue manager.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "reverse_spiral_finish_type",
      "description": "If the option value is 1, the tool path is obtained from standard one by reversing it; if the option value is 2, the tool path starts from an inner circle.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "shade_mfg_ref_models",
      "description": "No - Does not process reference parts when generating the shaded image (to save time). Yes - Shades reference parts when generating shaded images.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Manufacturing",
      "name": "store_tool_path_file",
      "description": "Specifies how tool path information is computed. Yes - Tool path information stored in file filename.tph (filename is manufacturing model name). No - Tool path is computed each time manufacturing model is retrieved or parameters are changed.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Manufacturing",
      "name": "tool_motion_list_length",
      "description": "Controls the number of rows visible in the tool motion list without scrolling.   This value is applied to dashboard based NC Steps.",
      "values": "",
      "default": "7"
    },
    {
      "category": "Manufacturing",
      "name": "tool_path_preview_default",
      "description": "Sets tool path preview default mode to OFF.",
      "values": "off, on, auto",
      "default": "auto"
    },
    {
      "category": "Manufacturing",
      "name": "turn_avoid_holder_interference",
      "description": "Yes - Tool holder interference will be ignored during Turning toolpath calculation.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Manufacturing",
      "name": "wcell_fixt_info_setup_file",
      "description": "Specify name and path of the file containing workcell and fixture name info.",
      "values": "",
      "default": ""
    },
    {
      "category": "Manufacturing",
      "name": "workpiece_instances",
      "description": "Cut out are created in Workpiece but not the family table instances.",
      "values": "none, operations, steps, operations_and_steps",
      "default": "none"
    },
    {
      "category": "Mechanism",
      "name": "mdo_cl_executable",
      "description": "Path for Custom Load executable.",
      "values": "",
      "default": ""
    },
    {
      "category": "Mechanism",
      "name": "mdo_integration_method",
      "description": "Select integration method for dynamic analyses.",
      "values": "explicit, implicit, auto",
      "default": "auto"
    },
    {
      "category": "Mechanism",
      "name": "mdo_spring_wire_radius",
      "description": "Spring wire radius for dynamics spring icons.",
      "values": "",
      "default": "0.150000"
    },
    {
      "category": "Mechanism",
      "name": "mdx_belt_icon_width",
      "description": "Width of belt transmission icons.",
      "values": "",
      "default": "5.000000"
    },
    {
      "category": "Mechanism",
      "name": "mechanism_significant_digits",
      "description": "This is the number of significant digits of mantissa for real double values in mechanism mode.  Can be set in interval from 6 to 16. Default value is 12.",
      "values": "",
      "default": "12"
    },
    {
      "category": "Mechanism",
      "name": "mechanism_update_cross_section",
      "description": "Dynamical update of cross sections geometry during Kinematic Drag, Analysis run and Playback.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Mechanism",
      "name": "motion_envlp_alert",
      "description": "Displays the Motion Envelope alert the first time the quality level is increased.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Mechanism",
      "name": "move_mechanism_in_nongeom_reps",
      "description": "Allow mechanism operations in non geometrical representations.",
      "values": "yes, no, exclude_to_move",
      "default": "yes"
    },
    {
      "category": "Miscellaneous",
      "name": "allow_ply_cross_section",
      "description": "Yes - Enables Pro/COMPOSITE to create a cross-section of composite plys.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Miscellaneous",
      "name": "mapkey",
      "description": "Stores a keyboard macro. Use File > Options > Environment > Mapkey Settings to create, edit and delete mapkeys.",
      "values": "",
      "default": ""
    },
    {
      "category": "Miscellaneous",
      "name": "mapkeys_execution",
      "description": "Mapkeys execution behavior. No Feedback - The mapkey is executed with no feedback, Execute with Feedback - A warning message is given upon failure during execution, Stop at failure - The execution stops at failure and a feedback message is provided.",
      "values": "no_feedback, execute_with_feedback, stop_at_failure",
      "default": "no_feedback"
    },
    {
      "category": "Miscellaneous",
      "name": "relation_text_trail_output",
      "description": "No - Disable trail output from Text layout in Relation Parameter UI if it hasn't been changed.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Miscellaneous",
      "name": "relation_tool_mapkey_behavior",
      "description": "Will control how mapkeys will be executed in relation tool / dialog.  Incremental will add/remove text incrementally to the current set.  Full_output will record the original set state and replace the current one with it. Note: this config is dependent on relation_text_trail_output.",
      "values": "increment, full_output",
      "default": "increment"
    },
    {
      "category": "Miscellaneous",
      "name": "session_log_mechanism",
      "description": "\"local_server\" if set with session_log_url it will upload data only to Exit Logger Server. \"quality_agent\" will upload session data only to Diagnostic Tools Server. \"local_server,quality_agent\" if set with session_log_url will send session data to both Exit Logger and Diagnostic Tools Server",
      "values": "",
      "default": ""
    },
    {
      "category": "Miscellaneous",
      "name": "show_cav_fit_loc_sys",
      "description": "Allows the printing of the transformation matrix of a Pro/Verify Fit into a file.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "allow_solid_perspective_hlr",
      "description": "Yes - Allows a solid to be displayed with hidden lines while in perspective.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "animate_component_placement",
      "description": "Animate the transition between component states in placement.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "animate_explode_states",
      "description": "Animate the transition between explode states and mold opening steps.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "blended_transparency",
      "description": "Yes - Transparent colors will appear using alpha blending (if supported) when the model is shaded.",
      "values": "yes, no, independent",
      "default": "independent"
    },
    {
      "category": "Model Display",
      "name": "capped_clip",
      "description": "Yes - Displays the model as a solid when shaded and clipped. No - Displays the model as surfaces when shaded and clipped.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "clip_always",
      "description": "Yes - Display clipping after Visibilities dialog box is closed.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "datum_point_symbol",
      "description": "Specifies the shape of datum point symbols displayed in Part or Assembly mode.",
      "values": "dot, cross, circle, triangle, square, cross_dot",
      "default": ""
    },
    {
      "category": "Model Display",
      "name": "default_ramp_size",
      "description": "Specifies a number of shades of gray to show shading of non-colored objects.",
      "values": "",
      "default": ""
    },
    {
      "category": "Model Display",
      "name": "default_scene_filename",
      "description": "Complete path to the scene file to be used as default scene file.",
      "values": "",
      "default": "<creo_loadpoint>\\graphic-library\\scenes\\/creo_default_scene.scn"
    },
    {
      "category": "Model Display",
      "name": "disp_comp_name_in_symb_rep",
      "description": "Displays the names of components in symbolic representations.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "display",
      "description": "Wireframe - All solid edges in white. Hiddenvis - Hidden lines in grey. Hiddeninvis - Hidden lines removed. Shade - Display shaded surfaces. Settings are reflected in printing and some export modes.",
      "values": "wireframe, hiddenvis, hiddeninvis, shade, shadewithreflect, shadewithedges",
      "default": "shade"
    },
    {
      "category": "Model Display",
      "name": "display_axes",
      "description": "Displays or hides datum axes.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "display_axis_tags",
      "description": "Displays or hides datum axis name tags.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "display_coord_sys",
      "description": "Yes - Coordinate systems will be displayed. No - Coordinate systems will not be displayed.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "display_coord_sys_tags",
      "description": "Yes - Coordinate system name tags will be displayed. No - Coordinate system name tags will not be displayed.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "display_florin",
      "description": "Yes: display of the florin (international currency symbol) where possible. No: use the euro symbol exclusively.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "display_plane_tags",
      "description": "Yes - Datum plane name tags will be displayed. No - Datum plane name tags will not be displayed.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "display_planes",
      "description": "Yes - Datum planes will be displayed. No - Datum planes will not be displayed.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "display_point_tags",
      "description": "Yes - Datum point tags will be displayed. No - Datum point tags will not be displayed.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "display_points",
      "description": "Yes - Datum points and their names will be displayed. No - Datum points and their names will not be displayed.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "display_silhouette_edges",
      "description": "Sets the display of silhouette edges for wireframe display only.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "display_z_extension_lines",
      "description": "Controls the display of dimension z-extension lines. Yes - z-extension lines will be displayed; No - z-extension lines will not be displayed.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "drawing_aa",
      "description": "Enable Anti-Aliasing in drawing mode",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "edge_display_quality",
      "description": "Controls display quality of an edge for wireframe and hidden-line removal. Normal - Normal quality of edge display. High - Increases tessellation by 2. Very_high - Increases tessellation by 3. Low - Decreases tessellation from normal, speeds up display.",
      "values": "high, low, normal, very_high",
      "default": "normal"
    },
    {
      "category": "Model Display",
      "name": "enable_ambient_occlusion",
      "description": "Enable ambient occlusion. This simulates the effect of light radiating from a real model by darkening the occluded areas.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "enable_fsaa",
      "description": "Enable OpenGL full screen anti-aliasing.",
      "values": "off, 2, 4, 8, 16",
      "default": "off"
    },
    {
      "category": "Model Display",
      "name": "enable_hlr_hashing",
      "description": "Enables hlr hashing",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "enable_transparent_text_bg",
      "description": "Yes - Clear background before displaying text. No - Do not clear text background.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "explode_animation_max_time",
      "description": "Sets the maximum amount of time for an animation between explode states.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Model Display",
      "name": "fast_highlight",
      "description": "Yes - Use simplified highlighting which redisplays more quickly at the expense of certain details.  This option may increase memory usage slightly.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "fasthlr",
      "description": "Specifies whether fast hidden line removal is on/off by default.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "frames_per_sec",
      "description": "Determines whether view is animated.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "frames_per_sec_value",
      "description": "Used to set the smoothness of view animation changes. Higher numbers provide more frames/sec, and giving you a smoother animation. Lower numbers cause the view to change more quickly.",
      "values": "",
      "default": "3"
    },
    {
      "category": "Model Display",
      "name": "graphics_library_dir",
      "description": "Allows the user to specify a different graphics library.",
      "values": "",
      "default": ""
    },
    {
      "category": "Model Display",
      "name": "hide_set_datum_plane_with_plane",
      "description": "no - Does not hide set datum planes along with datum planes.  yes - Hides set datum planes along with datum planes.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "hlr_adv_interference_check_asm",
      "description": "Yes - Hidden lines for the intersected bodies and components are accurately removed. This can result in slower performance.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "hlr_adv_interference_check_prt",
      "description": "Yes - Hidden lines for the intersected bodies in a part mode are accurately removed. This can result in slower performance.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "lattice_points_in_simulate_only",
      "description": "Display lattice open boundary point sets in Simulation mode only",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "lods_enabled",
      "description": "Determines whether or not the system uses Level of Detail in shaded models during dynamic orientation (panning, zooming and spinning).",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "lods_value",
      "description": "When lods_enabled is Yes, this value specifies the default value used to display LODs. The value is a percentage of the edge size vs the total size of the model.",
      "values": "",
      "default": "50"
    },
    {
      "category": "Model Display",
      "name": "max_animation_time",
      "description": "When the orientation, or zoom state, of the Creo window changes, an animation sequence of a predefined duration takes place. This option controls the maximum time the system spends animating.",
      "values": "",
      "default": "1"
    },
    {
      "category": "Model Display",
      "name": "max_image_dimension",
      "description": "Set the upper bound dimension on images loaded into Creo. Images larger than this limit will be rescaled to this upper bound during loading.",
      "values": "4096, 1024, 2048, 8192, 16384",
      "default": "16384"
    },
    {
      "category": "Model Display",
      "name": "mesh_spline_surf",
      "description": "Turns the blue mesh surface lines on or off.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "min_animation_steps",
      "description": "When the orientation, or zoom state, of the Creo window changes, an animation sequence of predefined duration takes place. This option controls the minimum number of frames used in the animation sequence.",
      "values": "",
      "default": "6"
    },
    {
      "category": "Model Display",
      "name": "model_detail_options_file",
      "description": "Sets the path to the file which contains the default model detail option values for new models.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\3d_inch.dtl"
    },
    {
      "category": "Model Display",
      "name": "orientation",
      "description": "Establishes the initial standard view orientation. User_default - System uses X-axis and Y-axis values defined by options x_axis and y_axis.",
      "values": "isometric, trimetric, user_default",
      "default": "trimetric"
    },
    {
      "category": "Model Display",
      "name": "reorient_when_annot_plane_set",
      "description": "Reorient the model when the annotation plane is set.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "save_scene_with_file",
      "description": "Yes - Automatically update the model with current scene information when saving the model; No - Scene information embedded in model must be updated manually.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "save_texture_with_model",
      "description": "Yes - Embed applied texture and tracesketch bitmap files into the model file.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "save_triangles_flag",
      "description": "Spinning shaded images with software graphics only.  Note: This option has no effect if your system uses hardware graphics.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "scene_background_on",
      "description": "Set default scene background state",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "shade_moving_comp",
      "description": "Yes - Shades assembly components while they are being moved. No - Displays components in wireframe while they are being moved.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "shade_quality",
      "description": "Model shade quality is used to decide how much to subdivide surfaces for  shading purposes. Higher shade quality is slower but produces better pictures.",
      "values": "12, 13, 14, 1, 3, 23, 24, 25, 26, 2, 4, 5, 15, 6, 7, 8, 9, 10, 11, 16, 17, 18, 19, 20, 21, 22, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50",
      "default": "3"
    },
    {
      "category": "Model Display",
      "name": "shade_surface_feat",
      "description": "Controls the shading of surface features.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "shade_windows",
      "description": "Enables shading of objects in all windows. This option does not also enable color shading.",
      "values": "all_windows, one_window",
      "default": "all_windows"
    },
    {
      "category": "Model Display",
      "name": "shade_with",
      "description": "Controls the display of datum curves on shaded objects.",
      "values": "no, curves",
      "default": "curves"
    },
    {
      "category": "Model Display",
      "name": "show_axes_for_extr_arcs",
      "description": "Determines if axes are created for newly extruded arcs.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "skip_small_surfaces",
      "description": "Gives the user the option not to display small shaded surfaces. Disabling this option will improve display quality at the expense of speed.  It is most useful for creating screen snap shots.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "smooth_lines",
      "description": "Choose whether to smooth lines by default or not.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "spherical_map_size",
      "description": "Size of Spherical map texture image used for environment mapping. Bigger size will have better image quality but will be slow to regenerate.",
      "values": "256x256, 512x512, 1024x1024",
      "default": "256x256"
    },
    {
      "category": "Model Display",
      "name": "spin_rate_zoom_sensitive",
      "description": "Allows slower spinning when zoomed in on a model.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "spin_with_notes",
      "description": "Yes - 3D feature and model notes are displayed during dynamic spinning of a model.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "spin_with_part_entities",
      "description": "Specifies whether datum features will be displayed during dynamic spinning of a model (affects legacy datum planes only).",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "spin_with_silhouettes",
      "description": "Yes - Silhouette lines will be displayed during dynamic spinning of a model.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "tan_angle_for_disp",
      "description": "For display purposes only. Sets the angle between two quilt surfaces below which the edge will be displayed as tangent. Enter an angle between 1.5 and 15 degrees.",
      "values": "",
      "default": "0.026180"
    },
    {
      "category": "Model Display",
      "name": "tangent_edge_display",
      "description": "Determines how edges between tangent surfaces are displayed.",
      "values": "no, solid, centerline, phantom, dimmed",
      "default": "solid"
    },
    {
      "category": "Model Display",
      "name": "text_antialiasing",
      "description": "Renders texts with antialiasing.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "texture",
      "description": "Yes - Applied textures will be displayed when the model is shaded.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "texture_search_path",
      "description": "Appends a directory to the search path for textures.",
      "values": "",
      "default": ""
    },
    {
      "category": "Model Display",
      "name": "transparency",
      "description": "Yes - Transparent colors will appear as such when the model is shaded.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Model Display",
      "name": "update_old_appearance",
      "description": "Update pre-Creo 3.0 appearances to their latest values. Always - update without warning, Never - do not update, Prompt - issue a warning dialog allowing users to choose to update or not.",
      "values": "never, always, prompt",
      "default": "always"
    },
    {
      "category": "Model Display",
      "name": "use_pre_wildfire_text_font",
      "description": "Yes - Use the old stroke-based PTC font as the default font. No - Use a True Type font as the default font.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Model Display",
      "name": "window_gamma",
      "description": "Gamma correction to apply to images created by renderer. Default value is 1.0.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Model Display",
      "name": "x_angle",
      "description": "Sets the default view orientation for models (appears in the Orientation dialog box). The default orientation is the last option, x_angle, y_angle, or orientation, in the configuration file.",
      "values": "",
      "default": "0.000000"
    },
    {
      "category": "Model Display",
      "name": "y_angle",
      "description": "Sets the default view orientation for models (appears in the Orientation dialog box). The default orientation is the last option, x_angle, y_angle, or orientation, in the configuration file.",
      "values": "",
      "default": "0.000000"
    },
    {
      "category": "Notification Manager",
      "name": "modeltree_show_materials",
      "description": "Show Materials in the Model Tree",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Notification Manager",
      "name": "nmgr_affected_by_dma",
      "description": "Show notifications for models/features that are affected by Creo direct modifications",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning"
    },
    {
      "category": "Notification Manager",
      "name": "nmgr_circular_references",
      "description": "Show notification when there are circular references in the top model",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Notification Manager",
      "name": "nmgr_gen_model_issues",
      "description": "Show notifications when basic/generic model is failed",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Notification Manager",
      "name": "nmgr_import_valid_issue",
      "description": "Show notifications when import validation score is defined as passed with warning",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Notification Manager",
      "name": "nmgr_modified_in_dma",
      "description": "Show notifications for components and features whose have references have been changed since last regeneration",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning"
    },
    {
      "category": "Notification Manager",
      "name": "nmgr_outdated_mathcad",
      "description": "Show notifications for models that contain PTC Mathcad worksheet with values that differ from values in Creo",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning"
    },
    {
      "category": "Notification Manager",
      "name": "nmgr_outdated_model_graphics",
      "description": "Show notification when a model in simplified representation is outdated",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Notification Manager",
      "name": "nmgr_outdated_non-native",
      "description": "Show notifications for non-native models that are not up-to-date with respect to source",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning"
    },
    {
      "category": "Notification Manager",
      "name": "nmgr_outdated_pdm",
      "description": "Show notifications for models that are not up-to-date with recent PDM model version",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Notification Manager",
      "name": "nmgr_outdated_pipe_solids",
      "description": "Show notifications for pipe solids that are not up-to-date with the recent piping application behavior",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning"
    },
    {
      "category": "Notification Manager",
      "name": "nmgr_pending_dma",
      "description": "Show notifications for models that were modified in Creo Direct and not reviewed. The changes should be accepted or rejected in the View Creo Changes dialog",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Notification Manager",
      "name": "nmgr_ref_model_issues",
      "description": "Show notifications when reference model is failed",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Notification Manager",
      "name": "nmgr_reference_changed",
      "description": "Show notifications for components and features whose have references have been changed since last regeneration",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Notification Manager",
      "name": "nmgr_reference_out_of_session",
      "description": "Show notifications for models/features with references not in session",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "do_not_show"
    },
    {
      "category": "Notification Manager",
      "name": "nmgr_sensor_data_replay",
      "description": "Show notification when sensor data download is completed and is ready for the model.",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Piping",
      "name": "aec_dwg_anno_attrpar_spec_file",
      "description": "Specifies the aec drawing annotation attribute/parameter specification file name.",
      "values": "",
      "default": "aec_dwg_anno_attrparam_spec.ptd"
    },
    {
      "category": "Piping",
      "name": "aec_object_type_file",
      "description": "Specifies the aec object type file name.",
      "values": "",
      "default": "aec_object_type.ptd"
    },
    {
      "category": "Piping",
      "name": "display_thick_insulation",
      "description": "Yes - Display insulation in thick mode. No - Display insulation in centerline mode. This option can be overridden by the Thick insulation option in the Model Display dialog box.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Piping",
      "name": "display_thick_pipes",
      "description": "Yes - Display pipes in thick mode. No - Display pipes in centerline mode. This option can be overridden by the Thick pipes option in the Model Display dialog box.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Piping",
      "name": "isogen_attribute_map_file",
      "description": "Specifies the mapping between isogen parameter and attribute name.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\isodata\\isogen_attribute_map.csv"
    },
    {
      "category": "Piping",
      "name": "isogen_endtype_map_file",
      "description": "Specify name of file mapping Pro/Piping endtypes with ISOGEN endtypes",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\isodata\\isogen_endtype_map.csv"
    },
    {
      "category": "Piping",
      "name": "isogen_mandatory_attr_file",
      "description": "Specify file containing mandatory attribute filenames used by ISOGEN.",
      "values": "",
      "default": "isogen.fls"
    },
    {
      "category": "Piping",
      "name": "isogen_nominal_size_map_file",
      "description": "Specify name of file mapping Pro/Piping Size with Nominal Sizes in MM and Inches",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\isodata\\isogen_nominal_size_map.csv"
    },
    {
      "category": "Piping",
      "name": "isogen_output_files_dir",
      "description": "Specify directory to save the PCFs created by ISOGEN interface",
      "values": "",
      "default": ""
    },
    {
      "category": "Piping",
      "name": "isogen_pcf_filename_format",
      "description": "Specify format to create filenames of PCF files being created",
      "values": "",
      "default": "mnemonic,-,specification,-,number"
    },
    {
      "category": "Piping",
      "name": "isogen_symbol_map_file",
      "description": "Specify name of file for mapping Pro/Piping selection names with ISOGEN symbol keys (SKEY)s",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\isodata\\isogen_symbol_map.csv"
    },
    {
      "category": "Piping",
      "name": "pipe_3d_bend_theor_int_pts",
      "description": "Yes - Displays theoretical intersections and bends in three-dimensional models.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Piping",
      "name": "pipe_bend_locations_csys_units",
      "description": "Define which assembly units will be used for the piping bend locations calculations. Yes - to use coordinate system assembly units. No - to use pipeline assembly units.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Piping",
      "name": "pipe_pre_22_bendinfo_conv",
      "description": "Convert bend report information generated prior to Pro/ENGINEER 2000i-2 to current saved analysis format.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Piping",
      "name": "pipe_solid_centerline",
      "description": "Yes - Display Pro/PIPING centerlines. No - Do not display Pro/PIPING centerlines.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Piping",
      "name": "pipe_solid_label_format",
      "description": "Specify the pipe solid label format that will be used to automatically generate pipeline labels.",
      "values": "",
      "default": "size,-,specification,-,mnemonic,-,number,-,insulation"
    },
    {
      "category": "Piping",
      "name": "pipe_update_pre_20_int_pts",
      "description": "Yes - Pipelines created prior to Release 20.0 are updated with intersection point entities. The entities are created in session by Info>Regen Info or when you retrieve the model.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Piping",
      "name": "pipeline_assembly_library_dir",
      "description": "Sets the default pipeline assembly library directory.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\pipelinelib\\"
    },
    {
      "category": "Piping",
      "name": "pipeline_assembly_name_format",
      "description": "Sets the default pipeline assembly name format.",
      "values": "",
      "default": "mnemonic,-,number"
    },
    {
      "category": "Piping",
      "name": "pipeline_label_format",
      "description": "Specify the pipeline label format that will be used to automatically generate pipeline labels.",
      "values": "",
      "default": "size,-,specification,-,mnemonic,-,number,-,insulation"
    },
    {
      "category": "Piping",
      "name": "pipeline_solid_start_part_name",
      "description": "Sets the default pipeline solid start part name.",
      "values": "",
      "default": "pipeline_solid_start.prt"
    },
    {
      "category": "Piping",
      "name": "pipeline_spool_label_format",
      "description": "Specify the pipeline spool label format that will be used to generate the spool labels during pipeline spool generation.",
      "values": "",
      "default": "mnemonic-number-prefix&#91;0]spoolnum&#91;01]suffix&#91;]"
    },
    {
      "category": "Piping",
      "name": "pipeline_start_assembly_name",
      "description": "Sets the default pipeline start assembly name.",
      "values": "",
      "default": "pipeline_start.asm"
    },
    {
      "category": "Piping",
      "name": "piping_appearance_map_file",
      "description": "Sets the default piping appearance map filename.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\master_catalog\\piping_appearance.map"
    },
    {
      "category": "Piping",
      "name": "piping_bolt_nut_select_file",
      "description": "Piping bolts and nuts selection file.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\master_catalog\\piping_bolt_nut_select.csv"
    },
    {
      "category": "Piping",
      "name": "piping_design_method",
      "description": "Sets the current Piping design method for pipeline modeling.",
      "values": "non_spec_driven, spec_driven, user_driven",
      "default": "user_driven"
    },
    {
      "category": "Piping",
      "name": "piping_enable_designate_report",
      "description": "Enable designatable reports for spec-driven piping.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Piping",
      "name": "piping_end_compatibility_file",
      "description": "Sets the default piping end compatibility filename.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\master_catalog\\piping_end_compatibility.csv"
    },
    {
      "category": "Piping",
      "name": "piping_extend_dim_scheme",
      "description": "Specify a dimension scheme for piping extend segment.",
      "values": "cartesian, cylindrical, spherical",
      "default": "cartesian"
    },
    {
      "category": "Piping",
      "name": "piping_extend_show_csys",
      "description": "Control whether small preview CSYS is shown at end of pipe when defining extend features in cartesian / spherical / cylindrical schemes.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Piping",
      "name": "piping_fitt_angle_tolerance",
      "description": "Sets the default piping fitting angle tolerance value.",
      "values": "",
      "default": "1.500000"
    },
    {
      "category": "Piping",
      "name": "piping_fitt_category_map_file",
      "description": "Sets the default piping fitting category map filename.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\sample_project\\piping_fitt_category_map.csv"
    },
    {
      "category": "Piping",
      "name": "piping_fitt_library_dir",
      "description": "Sets the default piping fitting library directory.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\fittinglib\\"
    },
    {
      "category": "Piping",
      "name": "piping_fluid_parameter",
      "description": "Enables/disables the Parameters tab in Create Pipeline Dialog",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Piping",
      "name": "piping_insulation_dir_file",
      "description": "Sets the default piping insulation directory filename.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\sample_project\\piping_insulation_dir.csv"
    },
    {
      "category": "Piping",
      "name": "piping_joint_fitting_clearance",
      "description": "Sets the piping joint minimum fitting clearance value.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Piping",
      "name": "piping_joint_fitting_offset",
      "description": "Sets the piping joint minimum fitting offset value.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Piping",
      "name": "piping_manufacture_dir_file",
      "description": "Sets the default piping manufacture directory filename.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\master_catalog\\piping_manufacture_dir.ptd"
    },
    {
      "category": "Piping",
      "name": "piping_material_file",
      "description": "Sets the default piping material filename.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\master_catalog\\piping_material.ptd"
    },
    {
      "category": "Piping",
      "name": "piping_material_source",
      "description": "Sets the source for material information. Note Material_dir requires pro_material_dir to be set.",
      "values": "weight_length, material_dir",
      "default": "weight_length"
    },
    {
      "category": "Piping",
      "name": "piping_mcat_dir",
      "description": "Sets the default piping master catalog directory.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\master_catalog\\"
    },
    {
      "category": "Piping",
      "name": "piping_mcat_dir_file",
      "description": "Sets the default piping master catalog directory filename.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\master_catalog\\piping_mcat_dir.csv"
    },
    {
      "category": "Piping",
      "name": "piping_min_bolting_clearance",
      "description": "Sets the default piping minimum bolting clearance value.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Piping",
      "name": "piping_old_mcat_format",
      "description": "Enable\\Disable the use of the old master catalog piping data.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Piping",
      "name": "piping_project_data_dir",
      "description": "Sets the default Project data directory.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\sample_project\\"
    },
    {
      "category": "Piping",
      "name": "piping_schematic_driven",
      "description": "Set the Schematic Driven Pipeline Modeling ON/OFF",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Piping",
      "name": "piping_schematic_xml_dir",
      "description": "Specify directory with full path containing schematic information XML file(s).",
      "values": "",
      "default": "<dir_name>\\dump_x86e_win64\\"
    },
    {
      "category": "Piping",
      "name": "piping_spec_dir_file",
      "description": "Sets the default piping specification directory filename.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\sample_project\\piping_spec_dir.csv"
    },
    {
      "category": "Piping",
      "name": "piping_system_tree_format",
      "description": "Sets the default piping model tree format.",
      "values": "",
      "default": "mnemonic"
    },
    {
      "category": "Piping",
      "name": "piping_thumb_wheel_increment",
      "description": "Sets the default piping thumb wheel increment value.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Piping",
      "name": "piping_thumb_wheel_ratio_inc",
      "description": "Sets the default piping thumb wheel ratio increment value.",
      "values": "",
      "default": "0.010000"
    },
    {
      "category": "Piping",
      "name": "piping_wildfire_convert",
      "description": "Always ask before converting old piping assemblies to update the network structure.",
      "values": "never, automatic, manual",
      "default": "manual"
    },
    {
      "category": "Piping",
      "name": "pro_insulation_dir",
      "description": "Specifies the directory to search for insulation files used in Pro/PIPING. Use full path name to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Piping",
      "name": "pro_pip_fitt_dir",
      "description": "Specifies the directory to search for fittings used in Pro/PIPING.",
      "values": "",
      "default": ""
    },
    {
      "category": "Piping",
      "name": "pro_pip_lnstk_dir",
      "description": "Specifies the directory to search for linestock files used in Pro/PIPING. Use full path name to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Piping",
      "name": "units_system_dic_file",
      "description": "Specifies the file containing the mapping for MCAT filename and units.",
      "values": "",
      "default": "<creo_loadpoint>\\text\\piping_data\\master_catalog\\piping_units_system_dic_file.ptd"
    },
    {
      "category": "Printing & Plotting",
      "name": "acrobat_reader",
      "description": "Sets the Adobe Acrobat Reader command path. This value will be used to launch the reader after exporting a PDF document.",
      "values": "",
      "default": ""
    },
    {
      "category": "Printing & Plotting",
      "name": "cs_print_use_frm_file",
      "description": "Specifies the name of format file (*.frm) used as a default for printing models.  The format file could be customized within the Printer Configuration dialog box.",
      "values": "",
      "default": ""
    },
    {
      "category": "Printing & Plotting",
      "name": "delete_after_plotting",
      "description": "Yes - A plot file is automatically deleted from the directory in which it resides when it has been successfully plotted.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Printing & Plotting",
      "name": "din_std_line_priority",
      "description": "If set to YES line priority in plotting or export is determined according to DIN standard",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Printing & Plotting",
      "name": "gerber_360_interpolation",
      "description": "Yes - Arcs and circles included in outputted Gerber plot files will take this format.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Printing & Plotting",
      "name": "pen1_line_weight",
      "description": "Sets the weight of entities plotted with pens using an electrostatic plotter. The weight is a range from 1 (thinnest) to 16 (thickest).",
      "values": "",
      "default": "4"
    },
    {
      "category": "Printing & Plotting",
      "name": "pen2_line_weight",
      "description": "Sets the weight of entities plotted with pens using an electrostatic plotter. The weight is a range from 1 (thinnest) to 16 (thickest).",
      "values": "",
      "default": "1"
    },
    {
      "category": "Printing & Plotting",
      "name": "pen3_line_weight",
      "description": "Sets the weight of entities plotted with pens using an electrostatic plotter. The weight is a range from 1 (thinnest) to 16 (thickest).",
      "values": "",
      "default": "2"
    },
    {
      "category": "Printing & Plotting",
      "name": "pen4_line_weight",
      "description": "Sets the weight of entities plotted with pens using an electrostatic plotter. The weight is a range from 1 (thinnest) to 16 (thickest).",
      "values": "",
      "default": "3"
    },
    {
      "category": "Printing & Plotting",
      "name": "pen5_line_weight",
      "description": "Sets the weight of entities plotted with pens using an electrostatic plotter. The weight is a range from 1 (thinnest) to 16 (thickest).",
      "values": "",
      "default": "2"
    },
    {
      "category": "Printing & Plotting",
      "name": "pen6_line_weight",
      "description": "Sets the weight of entities plotted with pens using an electrostatic plotter. The weight is a range from 1 (thinnest) to 16 (thickest).",
      "values": "",
      "default": "3"
    },
    {
      "category": "Printing & Plotting",
      "name": "pen7_line_weight",
      "description": "Sets the weight of entities plotted with pens using an electrostatic plotter. The weight is a range from 1 (thinnest) to 16 (thickest).",
      "values": "",
      "default": "1"
    },
    {
      "category": "Printing & Plotting",
      "name": "pen8_line_weight",
      "description": "Sets the weight of entities plotted with pens using an electrostatic plotter. The weight is a range from 1 (thinnest) to 16 (thickest).",
      "values": "",
      "default": "4"
    },
    {
      "category": "Printing & Plotting",
      "name": "pen_slew",
      "description": "Sets the pen speed for both x and y directions for plotters that are compatible with this option. Consult your plotter's user guide for more information.",
      "values": "",
      "default": "-1.000000 0.000000"
    },
    {
      "category": "Printing & Plotting",
      "name": "pen_slew_xy",
      "description": "Sets the pen speed for the x and y directions individually for plotters that are compatible with this option.  The first value is the x value and the second, the y value. They should be separated by a space.",
      "values": "",
      "default": "-1.000000 0.000000"
    },
    {
      "category": "Printing & Plotting",
      "name": "pen_table_file",
      "description": "Specifies a default pen mapping table which supersedes other pen mapping information.",
      "values": "",
      "default": "table.pnt"
    },
    {
      "category": "Printing & Plotting",
      "name": "plot_carberry_extends",
      "description": "When plotting to a raster format (jpg, tiff, etc), set to YES to ignore the view border and produce output sized to the smallest rectangle that includes the drawing items.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Printing & Plotting",
      "name": "plot_file_dir",
      "description": "Specifies the directory where plot files should be written. Use the full pathname to avoid problems. For example /home/users/plotfiles.",
      "values": "",
      "default": ""
    },
    {
      "category": "Printing & Plotting",
      "name": "plot_linestyle_scale",
      "description": "Specifies the scaling factor for the DOTFONT line style in a plot.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Printing & Plotting",
      "name": "plot_names",
      "description": "Yes - Plot files are given descriptive extensions when created. No - All plot files are simply given the extension .plt.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Printing & Plotting",
      "name": "plot_proceed_dialog",
      "description": "Yes - Enables the Plot Proceed dialog which provides a choice for delaying the printing of plot files. This is useful for large plots when using lp print commands. The lp command may not access the plot file before it is removed resulting in no output.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Printing & Plotting",
      "name": "plot_to_scale_full_window",
      "description": "Provides the ability to exclude empty window space when plotting the model to scale.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Printing & Plotting",
      "name": "plotter",
      "description": "Establishes the default plotter for making plot files.",
      "values": "",
      "default": ""
    },
    {
      "category": "Printing & Plotting",
      "name": "plotter_command",
      "description": "Sets the command that you use to start a plot on your system; for Windows NT or Windows 95, windows_print_manager option configures Creo to plot to a recognized device in the Windows NT or Windows 95 print manager.",
      "values": "",
      "default": "windows_print_manager"
    },
    {
      "category": "Printing & Plotting",
      "name": "plotter_handshake",
      "description": "Specifies the type of plotter handshake initialization sequence generated in the plotter files.",
      "values": "hardware, software",
      "default": "software"
    },
    {
      "category": "Printing & Plotting",
      "name": "postscript_compression",
      "description": "Specifies whether or not to compress exported shaded PostScript files. Yes - A shaded postscript file created with File>Export will be compressed. This will increase processing time.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Printing & Plotting",
      "name": "pro_plot_config_dir",
      "description": "Sets the directory of your user-defined plotter configuration file. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Printing & Plotting",
      "name": "ps_output_with_pagesize",
      "description": "Specifies whether or not to include pagesize information when generating postscript files from Creo. No - Creo will omit Adobe level 2 pagesize information from the header of the postscript file.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Printing & Plotting",
      "name": "raster_plot_dpi",
      "description": "Determines the resolution for plotter outputs variables are in dots per inch.",
      "values": "100, 200, 300, 400",
      "default": "100"
    },
    {
      "category": "Printing & Plotting",
      "name": "rotate_postscript_print",
      "description": "Specifies rotation for printing. Yes - Rotates a PostScript plot 90 degrees counterclockwise. Use when you are plotting a landscape drawing on a portrait-type laser printer, or a portrait drawing on a landscape-type laser printer.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Printing & Plotting",
      "name": "shaded_postscript_background",
      "description": "Specifies how background colors are handled in Postscript files of shaded objects.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Printing & Plotting",
      "name": "ttf_handling_for_plot_files",
      "description": "Defines how annotations using True Type Fonts are written to the plot file. Using True Type Fonts reduces the plot file size, but font substitution may occur due to device settings. Annotations that do not use True Type Fonts are unaffected by this option.",
      "values": "stroke all fonts, use true type fonts",
      "default": "use true type fonts"
    },
    {
      "category": "Printing & Plotting",
      "name": "u3d_create_color_surfaces",
      "description": "YES- Exports color of each surface of model. NO- Exports one color per model. Default NO.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Printing & Plotting",
      "name": "use_8_plotter_pens",
      "description": "Specifies whether to support up to 8 plotter pens. The initial default is 4 pens.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Printing & Plotting",
      "name": "use_software_linefonts",
      "description": "Yes - The exact line style used in Creo is plotted, stroked out dot by dot, dash by dash, and space by space. No - plots lines using the line font it supports which most closely resembles the font used in Creo.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Printing & Plotting",
      "name": "variable_plots_in_inches",
      "description": "No - Variable plot sizes may be entered in millimeters.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Printing & Plotting",
      "name": "versatec_cutter_installed",
      "description": "Yes - Indicates that a cutter is installed on a Versatec plotter.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Reference Control",
      "name": "allow_direct_ref_to_layout_file",
      "description": "Allow direct references to layout files through layout feature.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Reference Control",
      "name": "allow_ref_scope_change",
      "description": "No - Reference scope setting changes are only allowed on Model/Component level.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Reference Control",
      "name": "def_comp_ref_ctrl_exception",
      "description": "Default setting for newly created components that allows/disallows referencing entities forbidden by Reference Control settings.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Reference Control",
      "name": "def_multiple_backup_prompt_num",
      "description": "Number of selected components/features that will invoke confirmation before the creation or deletion of backups.",
      "values": "",
      "default": "100"
    },
    {
      "category": "Reference Control",
      "name": "def_obj_feat_refs_to_backup",
      "description": "Default setting that controls the level of feature backup for newly created models. Other_models: all references to other models will be backed up, Non_permitted: only references that were created despite the initial restrictions will be backed up.",
      "values": "none, other_models, non_permitted",
      "default": "non_permitted"
    },
    {
      "category": "Reference Control",
      "name": "def_obj_place_refs_to_backup",
      "description": "Default setting that controls the level of placement backup for newly created models. Other_models: all references to other models will be backed up, Non_permitted: only references that were created despite the initial restrictions will be backed up.",
      "values": "all, none, other_models, non_permitted",
      "default": "non_permitted"
    },
    {
      "category": "Reference Control",
      "name": "def_obj_ref_ctrl_exception",
      "description": "Default setting for newly created models that allows/disallows referencing entities forbidden by Reference Control settings.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Reference Control",
      "name": "default_comp_geom_scope",
      "description": "Set thespecified Shared Geometry reference control conditions to newly added components.",
      "values": "all, none, pg",
      "default": "all"
    },
    {
      "category": "Reference Control",
      "name": "default_comp_module_geom_scope",
      "description": "Set the specified Shared Geometry reference control conditions to newly added components for configurable structure.",
      "values": "all, none, pg, tagged",
      "default": "tagged"
    },
    {
      "category": "Reference Control",
      "name": "default_comp_scope_setting",
      "description": "Set the specified Accessible reference control conditions to newly added components.",
      "values": "all, none, subassemblies, skeleton_model",
      "default": "all"
    },
    {
      "category": "Reference Control",
      "name": "default_comp_skel_geom_scope",
      "description": "Set the specified Shared Geometry reference control conditions to newly added Skeleton components.",
      "values": "all, none, pg",
      "default": "all"
    },
    {
      "category": "Reference Control",
      "name": "default_comp_skel_scope_setting",
      "description": "Set the specified Accessible reference control conditions to newly added Skeleton components.",
      "values": "all, none, subassemblies, skeleton_model",
      "default": "all"
    },
    {
      "category": "Reference Control",
      "name": "default_ext_ref_scope",
      "description": "Set default scope for externally referenced models. All - Any model. None - Only current model and children. Skeletons - Any component in model's assembly and higher skeletons on branch. Subassembly - Only components and children in model's assembly.",
      "values": "all, none, subassemblies, skeleton_model",
      "default": "all"
    },
    {
      "category": "Reference Control",
      "name": "default_geom_scope",
      "description": "Default value for Geometry Scope allowed for referencing.",
      "values": "all, pg_if_exists, pg_only",
      "default": "all"
    },
    {
      "category": "Reference Control",
      "name": "default_obj_constraints_scope",
      "description": "Set the specified Shared Placement reference control conditions to newly created models if template models were not used.",
      "values": "all, none, interfaces",
      "default": "all"
    },
    {
      "category": "Reference Control",
      "name": "default_obj_module_constr_scope",
      "description": "Set the specified Shared Placement reference control conditions to newly created models for configurable structure if template models were not used.",
      "values": "all, none, interfaces, tagged",
      "default": "tagged"
    },
    {
      "category": "Reference Control",
      "name": "default_obj_module_geom_scope",
      "description": "Set the specified Shared Geometry reference control conditions to newly created models for configurable structure modules if template models were not used.",
      "values": "all, none, pg, tagged",
      "default": "all"
    },
    {
      "category": "Reference Control",
      "name": "default_object_geom_scope",
      "description": "Set the specified Shared Geometry reference control conditions to newly created models if template models were not used.",
      "values": "all, none, pg",
      "default": "all"
    },
    {
      "category": "Reference Control",
      "name": "default_object_scope_setting",
      "description": "Set default condition for reference control. All - Any model. None - Only current model and children. Skeletons - Any component in model's assembly ang higher skeletons on branch. Subassembly - Only components and children in model's assembly.",
      "values": "all, none, subassemblies, skeleton_model",
      "default": "all"
    },
    {
      "category": "Reference Control",
      "name": "default_placement_scope",
      "description": "Default value for Component Placement Reference filter.",
      "values": "all, intrf_if_exists, intrf_only",
      "default": "all"
    },
    {
      "category": "Reference Control",
      "name": "feat_references_to_backup",
      "description": "Level of backup for feature references",
      "values": "none, other_models, non_permitted",
      "default": "non_permitted"
    },
    {
      "category": "Reference Control",
      "name": "ignore_all_ref_scope_settings",
      "description": "Controls whether object-specific reference scope settings are ignored or not. Environment scope settings will still be enforced. See also allow_ref_scope_change and default_ext_ref_scope",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Reference Control",
      "name": "ignore_export_geom_declaration",
      "description": "Ignore Export Geometry settings.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Reference Control",
      "name": "model_allow_ref_scope_change",
      "description": "Yes - Users can change the scope setting of components.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Reference Control",
      "name": "placement_references_to_backup",
      "description": "Level of backup for placement references",
      "values": "all, none, other_models, non_permitted",
      "default": "non_permitted"
    },
    {
      "category": "Reference Control",
      "name": "ref_control_allow_exceptions",
      "description": "Check to allow referencing components that are not permitted by the above setting",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Reference Control",
      "name": "ref_scope_copy_color",
      "description": "Set the color of backed up references according to RGB values. Enter RGB values between 0 and 100 separated by space.",
      "values": "",
      "default": "55.000000 55.000000 55.000000"
    },
    {
      "category": "Reference Control",
      "name": "ref_scope_copy_color_change",
      "description": "Enable changing colors of backuped references during selection.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Reference Control",
      "name": "ref_scope_no_pick_to_copy",
      "description": "Disable selecting references backuped by references control.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Reference Control",
      "name": "ref_scope_no_pick_to_prohibit",
      "description": "Disable selecting references prohibited by references control.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Reference Control",
      "name": "ref_scope_prohibit_color",
      "description": "Set the color of prohibited references according to RGB values. Enter RGB values between 0 and 100 separated by space.",
      "values": "",
      "default": "45.000000 45.000000 45.000000"
    },
    {
      "category": "Reference Control",
      "name": "ref_scope_prohibit_color_change",
      "description": "Enable changing colors of prohibited references during selection.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sheetmetal",
      "name": "die_models_directory",
      "description": "Sets path to directory that contains the die models.",
      "values": "",
      "default": ""
    },
    {
      "category": "Sheetmetal",
      "name": "enable_flat_state",
      "description": "Enables the creation of a flat state instance of the model. The instance can be fully flat or fully formed.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sheetmetal",
      "name": "flange_shape_sketches_directory",
      "description": "Sets path to directory that contains the Flange shapes.",
      "values": "",
      "default": ""
    },
    {
      "category": "Sheetmetal",
      "name": "flat_shape_sketches_directory",
      "description": "Sets path to directory that contains the Flat shapes.",
      "values": "",
      "default": ""
    },
    {
      "category": "Sheetmetal",
      "name": "flat_simp_rep_name",
      "description": "Specifies the default name for a flat state representation of a sheet metal part.  system - the name is generated automatically.",
      "values": "",
      "default": "system"
    },
    {
      "category": "Sheetmetal",
      "name": "initial_bend_y_factor",
      "description": "Specifies a constant used to determine the neutral bend line for a sheet metal part. This value is always used for non-cylindrical bends. It is used for regular bends only when no bend table is specified.",
      "values": "",
      "default": "0.500000"
    },
    {
      "category": "Sheetmetal",
      "name": "material_upd_smt_bend_table",
      "description": "Defines whether assignment of material to the model via Creo Toolkit will overwrite existing bend table data and y factor value. Always Replace - Overwrites existing data. Never Replace - Keeps existing data",
      "values": "always_replace, never_replace",
      "default": "always_replace"
    },
    {
      "category": "Sheetmetal",
      "name": "pro_sheet_met_dir",
      "description": "Sets the default directory of your user-defined bend tables. If not set, the Pro/SHEETMETAL supplied bend tables are used. Use the full path name to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Sheetmetal",
      "name": "pro_smt_params_dir",
      "description": "Specifies the directory to save/retrieve Sheet metal parameters files.  Use full path name to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Sheetmetal",
      "name": "punch_axis_points",
      "description": "Yes - Enables the creation of punch axis points in Sheetmetal cuts and punches.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sheetmetal",
      "name": "punch_models_directory",
      "description": "Sets path to directory that contains the punch models.",
      "values": "",
      "default": ""
    },
    {
      "category": "Sheetmetal",
      "name": "smt_add_bends_on_sharp_edges",
      "description": "Determines if bends will be added automatically on edges with sharp geometry in the wall creation tools. Yes - bends will be added automatically. No - sharp geometry of edges will be kept.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sheetmetal",
      "name": "smt_allow_flip_sketch",
      "description": "Yes - Allows flipping the sketch in Flat and Flange tools. No  - Disables the ability to flip the sketch in Flat and Flange tools.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sheetmetal",
      "name": "smt_bend_notes_dflt_display",
      "description": "Define the default state of bend note display (sheetmetal mode)",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sheetmetal",
      "name": "smt_bend_notes_direction_down",
      "description": "Define the down direction symbol for bend notes (sheetmetal mode)",
      "values": "",
      "default": "default"
    },
    {
      "category": "Sheetmetal",
      "name": "smt_bend_notes_direction_up",
      "description": "Define the up direction symbol for bend notes (sheetmetal mode)",
      "values": "",
      "default": "default"
    },
    {
      "category": "Sheetmetal",
      "name": "smt_bend_notes_order",
      "description": "Define the fields order for bend notes (sheetmetal mode)",
      "values": "",
      "default": "&type&direction&angle"
    },
    {
      "category": "Sheetmetal",
      "name": "smt_bend_notes_type_formed",
      "description": "Define the formed symbol for bend notes (sheetmetal mode)",
      "values": "",
      "default": "default"
    },
    {
      "category": "Sheetmetal",
      "name": "smt_bend_notes_type_rolled",
      "description": "Define the rolled symbol for bend notes (sheetmetal mode)",
      "values": "",
      "default": "default"
    },
    {
      "category": "Sheetmetal",
      "name": "smt_crn_rel_display",
      "description": "Yes - Corner relief notes will be displayed. No - Corner relief notes will not be displayed.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sheetmetal",
      "name": "smt_drive_bend_by_parameters",
      "description": "Sheetmetal bend radius and bend angle values and bend dimension location will be driven by feature level relations to Sheetmetal parameters.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sheetmetal",
      "name": "smt_drive_tools_by_parameters",
      "description": "Drives the Sheetmetal options and values by feature-level relations to Sheetmetal parameters.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sheetmetal",
      "name": "smt_form_abort_on_fail_plc",
      "description": "Yes - will always fail the Sheetmetal Form feature if there is a problem with its placement .",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sheetmetal",
      "name": "smt_mp_method",
      "description": "MASS - Suppressed Flat Pattern and Flatten Forms will be temporary resumed before mass properties calculation of sheetmetal part. CG - Mass Properties calculation will be performed on current state of sheetmetal part.  BOTH - Both methods will be used one after the other.",
      "values": "both, mass, cg",
      "default": "cg"
    },
    {
      "category": "Sheetmetal",
      "name": "smt_outside_mold_lines",
      "description": "Yes - Outside Mold Lines will be created during Flat Pattern creation.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "2d_palette_path",
      "description": "Sets the default directory for the user sketcher shape library. Use the full path name to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Sketcher",
      "name": "display_sketch_dims",
      "description": "Controls the display of sketch dimensions during dynamic edit.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "dma_sketcher_guide_width_factor",
      "description": "Guide width as a proportion of sketched line width",
      "values": "",
      "default": "0.750000"
    },
    {
      "category": "Sketcher",
      "name": "grid_snap",
      "description": "Yes - Enables snapping to grid line intersections. No - Turns grid snapping off and you can snap to any location.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "section_color",
      "description": "Specifies the color of sketched sections.",
      "values": "default, drawing_color, sketch_color",
      "default": ""
    },
    {
      "category": "Sketcher",
      "name": "show_sketcher_constr_dyn_edit",
      "description": "Determines whether to show or hide Sketcher constrains in dynamic editing.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sket_import_geometry_line_style",
      "description": "Determine if the original line style and color should be preserved on Copy/Paste, Sketcher Palette and Import from file. Yes - Preserve original line style and color.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sketch_max_guide_refs",
      "description": "Specifies the number of references that can be stored for sketching guidance when you sketch geometry in Sketcher, Layout, and the modern sketching tools in Drawing.",
      "values": "",
      "default": "10"
    },
    {
      "category": "Sketcher",
      "name": "sketch_ref_list_sensitivity",
      "description": "Time to Add an Entity to Guide Reference List.",
      "values": "high, medium, low, very_high, very_low",
      "default": "very_high"
    },
    {
      "category": "Sketcher",
      "name": "sketch_thick_dim_line_highlight",
      "description": "Display lines and arrows of highlighted dimensions in Sketcher using thick lines.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_alignment_constr",
      "description": "Yes - Alignment constraints will be used by Intent Manager; No - Alignment constraints will not be used.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_animated_modify",
      "description": "No - The section is not animated as modifications are regenerated.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_auto_create_references",
      "description": "This option controls the automatic reference creation from selected background geometry.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_auto_create_refs",
      "description": "The option values are: 2: the system automatically creates 2 dimensioning references; 1: the system automatically adds the orientation reference as a dimensioning reference; 0: the system does not automatically create dimensioning references.",
      "values": "1, 2",
      "default": "2"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_blended_background",
      "description": "This option controls whether the blended background should be used in 3D Sketcher.  The option has no effect if blended background is turned off generally.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_collinear_constr",
      "description": "Yes - collinear constraints will be used by Intent Manager; No - collinear constraints will not be used by Intent Manager.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_def_construction_font",
      "description": "Defines line font when sketching entities in construction mode or when converting a solid entity to construction.",
      "values": "default, dotfont, phantomfont",
      "default": "default"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_default_font_kerning",
      "description": "Automatically set kerning for text entities in Sketcher. Yes - Kerning will be set for new text entities. No  - Kerning will not be set automatically.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_diagonal_constr",
      "description": "Yes - Diagonal constraints will be used; No - Diagonal constraints will not be used.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_dim_of_revolve_axis",
      "description": "If this option is set all dimensions created by Intent Manager to Axis of Revolution will be diameter dimensions.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_dimension_autolock",
      "description": "Automatically lock strong sketcher dimensions.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_disp_constraints",
      "description": "Controls the display of constraints in Sketcher mode. Yes-Constraints are displayed.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_disp_dimensions",
      "description": "No - Suppresses the display of all dimensions while in sketcher.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_disp_grid",
      "description": "Specify whether or not to display the sketcher grid.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_disp_guides",
      "description": "Shows guides when sketching.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_disp_vertices",
      "description": "No - Suppresses the display of yellow points on all vertices while in sketcher.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_disp_weak_dimensions",
      "description": "Yes - weak dimensions will be displayed; No - weak dimensions will not be displayed.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_equal_length_constr",
      "description": "Yes - equal length constraints will be used by Intent Manager; No - equal length constraints will not be used by Intent Manager.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_equal_radii_constr",
      "description": "Yes - equal radii constraints will be used by Intent Manager; No - equal radii constraints will not be used by Intent Manager.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_grid_angle",
      "description": "Enter a grid angle value to override the default grid angle value.",
      "values": "",
      "default": "0.000000"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_grid_line_quantity",
      "description": "Enter number of radial lines for radial grid.",
      "values": "",
      "default": "12"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_grid_radius_spacing",
      "description": "Enter a radial grid spacing value to override the default radial grid spacing value.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_grid_type",
      "description": "Set grid type to be Cartesian or Polar.",
      "values": "cartesian, polar",
      "default": "cartesian"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_highlight_open_ends",
      "description": "Yes - Highlights open ends of sketched entities in Sketcher. No - Does not highlight open ends of sketched entities in Sketcher.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_import_convert_units",
      "description": "Sets the conversion of dimension units of imported files to the model units. Yes - Dimensions are converted. No - Dimensions are interpreted (for example, 1\" becomes 1mm).",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_import_exact_geom",
      "description": "During import in sketcher use exact geometry.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_instant_snap_to_model",
      "description": "Enable instant snapping when the sketch cursor is placed next to model geometry.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_known_dim_on_ref_ent",
      "description": "YES - create known dimensions on known geometry, NO - create reference dimensions on known geometry",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_line_width",
      "description": "Defines the lines thickness used for sketched geometry. The available range is 1.0 - 3.0.",
      "values": "",
      "default": "1.500000"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_lineup_hor_constr",
      "description": "Yes - line up horizontal constraints will be used by Intent Manager; No - line up horizontal constraints will not be used by Intent Manager.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_lineup_ver_constr",
      "description": "Yes - line up vertical constraints will be used by Intent Manager; No - line up vertical constraints will not be used by Intent Manager.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_lock_modified_dims",
      "description": "Yes - modified dimensions will be locked; No - modified dimensions will not be locked.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_lock_symmetry_axis",
      "description": "Automatically lock the axis of symmetry for symmetric constraints in Sketcher.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_midpoint_constr",
      "description": "Yes - midpoint constraints will be used by Intent Manager; No - midpoint constraints will not be used by Intent Manager.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_parallel_constr",
      "description": "Yes - parallel constraints will be used by Intent Manager; No - parallel constraints will not be used by Intent Manager.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_perpendicular_constr",
      "description": "Yes - perpendicular constraints will be used by Intent Manager; No - perpendicular constraints will not be used by Intent Manager.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_point_on_entity_constr",
      "description": "Yes - point on entity constraints will be used by Intent Manager; No - point on entity constraints will not be used by Intent Manager.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_refit_after_dim_modify",
      "description": "Refits section after dimension modification in 2D section or when creating the first feature.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_same_point_constr",
      "description": "Yes - same points constraints will be used by Intent Manager; No - same points constraints will not be used by Intent Manager.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_save_preview_image",
      "description": "This option controls whether section files should be saved with embedded image information which can be used to preview sections in File/Open dialog.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_set_grid_method",
      "description": "\"Dynamic\" - grid spacing is determined by the system based on zoom factor, \"Static\" - grid spacing is fixed and set by the user.",
      "values": "dynamic, static",
      "default": "dynamic"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_set_grid_x_major",
      "description": "Enter the number of grid lines per major line in x axis.",
      "values": "",
      "default": "5"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_set_grid_x_spacing",
      "description": "Enter an x-grid spacing value to override the default x-grid spacing value.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_set_grid_y_major",
      "description": "Enter the number of grid lines per major line in y axis.",
      "values": "",
      "default": "5"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_set_grid_y_spacing",
      "description": "Enter a y-grid spacing value to override the default y-grid spacing value.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_shade_closed_loops",
      "description": "yes-closed loops in sketcher will be displayed as shaded, no-closed loops in sketcher will not be displayed as shaded",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_snap_model_geometry",
      "description": "Controls whether to allow snapping to model geometry in sketches",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_snap_sensitivity",
      "description": "Adjusts the sensitivity of the snapping to geometry.",
      "values": "high, medium, low, very_high, very_low",
      "default": "very_high"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_starts_in_2d",
      "description": "Defines initial model orientation in Sketcher mode. Yes - (2D orientation) Looking directly at section (sketching) plane. No - (Orientation unchanged) Sketch directly on the 3D part.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_symmetric_constr",
      "description": "Yes - symmetric constraints will be used by Intent Manager; No - symmetric constraints will not be used by Intent Manager.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_tangent_constr",
      "description": "Yes - tangent constraints will be used by Intent Manager; No - tangent constraints will not be used by Intent Manager.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_undo_reorient_view",
      "description": "Controls the ability to Undo view reorientation while in Sketcher. Yes - it is possible to Undo view reorientation in Sketcher.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Sketcher",
      "name": "sketcher_undo_stack_limit",
      "description": "Sketcher saves a copy of each function performed. The number of possible saved functions depend on the number specified in the option. The undo menu can be used to remove the stored functions.",
      "values": "",
      "default": "200"
    },
    {
      "category": "Style Feature",
      "name": "advanced_style_surface_edit",
      "description": "Use advanced options by default for Surface Edit in Style.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Style Feature",
      "name": "keep_style_items_hidden_on_exit",
      "description": "Keep style entities hidden after exiting of the Style feature definition.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Style Feature",
      "name": "style_auto_regen_curves",
      "description": "Yes - Enable autoregeneration of curves.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Style Feature",
      "name": "style_auto_regen_shaded_surface",
      "description": "Yes - Enable autoregeneration of shaded surfaces.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Style Feature",
      "name": "style_auto_regen_surface",
      "description": "Yes - Enable autoregeneration of surfaces.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Style Feature",
      "name": "style_connection_arrow_scale",
      "description": "Sets the scale factor of surface connection icon. Number should be greater than 0.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Style Feature",
      "name": "style_default_normal_conn",
      "description": "Yes - Add default normal connection to newly created Style surface.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Style Feature",
      "name": "style_default_tangent_conn",
      "description": "Yes - Add default tangent connection to newly created Style surface.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Style Feature",
      "name": "style_display_grid",
      "description": "Yes - Display grid for active datum plane.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Style Feature",
      "name": "style_grid_spacing",
      "description": "Sets the number of lines to display on the grid. Number should be equal to or greater than 2.",
      "values": "",
      "default": "5"
    },
    {
      "category": "Style Feature",
      "name": "style_merge_surfaces",
      "description": "Merge surfaces on exit from the Style feature.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Style Feature",
      "name": "style_surface_mesh_display",
      "description": "On - Display surfaces mesh. Off - Do not display surfaces mesh. Off When Shaded - Display surfaces mesh except when shaded.",
      "values": "off, on, off when shaded",
      "default": "off when shaded"
    },
    {
      "category": "Style Feature",
      "name": "style_surface_mesh_quality",
      "description": "Sets the quality of the surface mesh. Value range is between 0.1 and 10.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "System",
      "name": "allow_float_opt_checkout",
      "description": "Yes - Allows checkout failure for floating modules.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "System",
      "name": "auto_traceback",
      "description": "\"always\": a traceback file will be generated when a fatal error occurs. \"yes\", \"ask\": ask the user whether to generate a traceback. \"no\", \"never\": no traceback will be generated.",
      "values": "yes, no, never, ask, always",
      "default": "always"
    },
    {
      "category": "System",
      "name": "browser_limit_to_ie9_mode",
      "description": "Limit Internet Explorer to IE9 standard mode even if higher version is installed.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "System",
      "name": "cmdmgr_trail_output",
      "description": "Trail file and mapkey output will include system instructions that are independent of user interface configuration when available (typically menu bar and toolbar options).",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "System",
      "name": "cpus_to_use",
      "description": "Set up the number of threads including main thread",
      "values": "",
      "default": "number of logical processors on the machine"
    },
    {
      "category": "System",
      "name": "csv_format_delimeter",
      "description": "Define the delimeter character in BOM format file: Comma, TAB, Semicolon, Space or other user-defined",
      "values": "comma, tab, semicolon, space",
      "default": ""
    },
    {
      "category": "System",
      "name": "display_ie8_warning_dialog",
      "description": "Show/Hide the warning dialog related to Internet Explorer 8 running in Compatibility Mode",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "System",
      "name": "export_report_format",
      "description": "Controls the format of the exported reports displayed in the embedded browser. Rich Text - Exports the report in Rich Text format, Comma Delimited - Exports the report in Comma Delimited format.",
      "values": "comma_delimited, rich_text",
      "default": "comma_delimited"
    },
    {
      "category": "System",
      "name": "fba_window_height",
      "description": "",
      "values": "",
      "default": "400"
    },
    {
      "category": "System",
      "name": "fba_window_width",
      "description": "",
      "values": "",
      "default": "400"
    },
    {
      "category": "System",
      "name": "general_undo_stack_limit",
      "description": "Setup the default number of entries in the top level Undo/Redo (default = 50).",
      "values": "",
      "default": "50"
    },
    {
      "category": "System",
      "name": "overlays_enabled",
      "description": "Yes - Enables Creo screens and menus to be placed on different overlay layers of the hardware graphics card. This frees memory for Creo use.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "System",
      "name": "pick_aperture_radius",
      "description": "Specifies the size of the area about the mouse when making selections. Units are 1/1000 of screen size.",
      "values": "",
      "default": "7.000000"
    },
    {
      "category": "System",
      "name": "protable_in_background",
      "description": "Yes - Starts Pro/TABLE editor in the background. Reduces time between pressing a menu button that uses Pro/TABLE and entering the data.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "System",
      "name": "saveunders_enabled",
      "description": "Yes - Enables Creo popup helptext and menus to retain the portion of the window they obscure to be used to restore the window image when they are dismissed.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "System",
      "name": "set_trail_single_step",
      "description": "Yes - Enables a trail file to be single-stepped by entering <CR>.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "System",
      "name": "tablet_device_name",
      "description": "Specifies the name of a digitizing tablet.",
      "values": "",
      "default": ""
    },
    {
      "category": "System",
      "name": "trail_delay",
      "description": "Sets a delay in seconds between trail file steps.",
      "values": "",
      "default": ""
    },
    {
      "category": "System",
      "name": "trail_dir",
      "description": "Instructs Creo to create its trail file in the specified directory rather than in the startup directory.",
      "values": "",
      "default": ""
    },
    {
      "category": "System",
      "name": "train_file_path",
      "description": "Specifies the default directory for training files. The path name must start from the root of the directory, for example, /home/users/library/training.",
      "values": "",
      "default": ""
    },
    {
      "category": "System",
      "name": "web_browser_history_days",
      "description": "Enter number of days to store history records.",
      "values": "",
      "default": "20"
    },
    {
      "category": "System",
      "name": "web_browser_homepage",
      "description": "Enter location of Creo browser home page.",
      "values": "",
      "default": "<creo_loadpoint>\\help\\usascii\\resource_center_index.html"
    },
    {
      "category": "System",
      "name": "web_browser_in_separate_window",
      "description": "Specifies whether Creo web browser should be launched as a separate window. When set to Yes the browser will be displayed as a separate window. The default, No, will result in the browser being embedded in the Creo application window.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "System",
      "name": "windows_browser_type",
      "description": "Select the type of embedded browser to use.",
      "values": "ie_browser, chromium_browser",
      "default": "chromium_browser"
    },
    {
      "category": "Update Control",
      "name": "boolean_feat_update_state",
      "description": "AUTO - New Boolean features are created with Automatic Update setting. MANUAL - New Boolean features are created with Manual Update setting. NO_DEPENDENCY - New Boolean features are created with No Dependency setting.",
      "values": "manual, auto, no_dependency",
      "default": "auto"
    },
    {
      "category": "Update Control",
      "name": "child_of_layout_backup_update",
      "description": "Set the default update state for a child referencing the layout feature's geometry.",
      "values": "manual, auto, notify",
      "default": "auto"
    },
    {
      "category": "Update Control",
      "name": "copied_feat_refs_update_state",
      "description": "State for newly created geometry backups for feature references. Auto update automatically; Manual - update upon request; Notify- update upon request and provide notification about outdatedness; No Dependency break connection to the original reference.",
      "values": "manual, auto, notify, no_dependency",
      "default": "auto"
    },
    {
      "category": "Update Control",
      "name": "copied_place_refs_update_state",
      "description": "Copied Placement References Update",
      "values": "manual, auto, notify, no_dependency",
      "default": "auto"
    },
    {
      "category": "Update Control",
      "name": "direct_child_of_layout_update",
      "description": "Set the default update state for a child directly referencing the layout model through layout feature.",
      "values": "manual, auto, notify",
      "default": "notify"
    },
    {
      "category": "Update Control",
      "name": "individual_child_update",
      "description": "Allow individual update control for children of layout feature.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Update Control",
      "name": "new_cg_update_state",
      "description": "Set the default update state for newly created Copy Geometry features relative to the reference model.",
      "values": "manual, auto, notify",
      "default": "auto"
    },
    {
      "category": "Update Control",
      "name": "new_layout_feature_update_state",
      "description": "Define the default update state of a new DSF created.",
      "values": "manual, auto, notify",
      "default": "notify"
    },
    {
      "category": "Update Control",
      "name": "retrieve_data_sharing_ref_parts",
      "description": "Define whether the reference model of data sharing feature set to automatic update or manual update with notification, will be retrieved to the session by default.",
      "values": "yes, no, ignore_missing",
      "default": "no"
    },
    {
      "category": "User Interface",
      "name": "ae_propagate_detail_dependency",
      "description": "Sets the AE detail dependency for AE's that are locally propagated. If set to independent, the AE's parameter call outs will update to other propagated AEs parameters.",
      "values": "dependent, independent",
      "default": "dependent"
    },
    {
      "category": "User Interface",
      "name": "af_copy_references_flag",
      "description": "Toggle display of Copy References column in Annotation Feature definition dialog",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "User Interface",
      "name": "allow_confirm_window",
      "description": "Display a confirmation window when exiting Creo. This enables you to use the mouse to confirm/cancel exiting Creo.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "User Interface",
      "name": "auto_ae_param_file",
      "description": "Define path and file name of external file used to define parameters that are automatically created in all Annotation Elements.",
      "values": "",
      "default": ""
    },
    {
      "category": "User Interface",
      "name": "auto_include_annot_plane",
      "description": "Control the default setting of the check box in the Propagate annotation dialog box which controls whether to pass all annotations plane references.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "User Interface",
      "name": "auto_propagate_ae",
      "description": "Yes - causes the automatic, local propagation of AE's after a supported feature has been created.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "User Interface",
      "name": "auxapp_popup_menu_info",
      "description": "Enable display of popup menu info in the trail file.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "User Interface",
      "name": "bm_graph_tool",
      "description": "BMX graph tool",
      "values": "default, excel_linked, excel_embedded",
      "default": "default"
    },
    {
      "category": "User Interface",
      "name": "bmgr_pref_file",
      "description": "Specifies the location of the Graph Tool preference file.",
      "values": "",
      "default": ""
    },
    {
      "category": "User Interface",
      "name": "button_name_in_help",
      "description": "Yes - The name and menu of any selected menu option displays, in English, in the help text associated with that button.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "User Interface",
      "name": "daystoshow_expirydialog",
      "description": "Set the number of days to show license expiry dialog box before expiration",
      "values": "",
      "default": "15"
    },
    {
      "category": "User Interface",
      "name": "default_ui_font",
      "description": "Sets font for text other than menu bar, menus and their children, and pop-up menus and help. Add comma-delimited variables in any order (italic bold, 24, times or 24, times, italic bold have the same effect). Any omitted variable uses standard setting.",
      "values": "",
      "default": ""
    },
    {
      "category": "User Interface",
      "name": "dialog_translation",
      "description": "Specifies the language in which the dialog display when running non-English version of Creo.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "User Interface",
      "name": "display_prompt_on_cursor",
      "description": "Display the message prompts near mouse cursor on top of graphics area",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "User Interface",
      "name": "enable_popup_help",
      "description": "Controls pop-up help in dialog boxes. Yes - Help enabled. No - Help disabled.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "User Interface",
      "name": "fonts_size",
      "description": "Determines the relative size of the text in menus and dialog boxes. You must restart Creo for the change to take effect.",
      "values": "medium, small, large",
      "default": ""
    },
    {
      "category": "User Interface",
      "name": "help_translation",
      "description": "Specifies the language in which the short help messages display when running non-English versions of Creo. Yes - Display in native language. No - Display in English.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "User Interface",
      "name": "iconify_entire_pro",
      "description": "Determines how many other Creo windows/menus are iconified when one window is iconified. Yes - All the windows and menus are iconified. No - Only the selected window is iconified.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "User Interface",
      "name": "kbd_cmd_abbreviation",
      "description": "On - Enables use of abbreviations when entering menu commands from the keyboard.",
      "values": "off, on",
      "default": "off"
    },
    {
      "category": "User Interface",
      "name": "kbd_selection",
      "description": "Provides the ability to select locations in the graphics area via the keyboard.  Yes - Selection in the graphics area may be performed via the keyboard.  No - Selection in the graphics area requires a mouse.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "User Interface",
      "name": "load_ui_customization_run_dir",
      "description": "Enables the loading of the UI customization file (.ui) if located in the run directory",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "User Interface",
      "name": "mdl_tree_cfg_file",
      "description": "Specifies the Model Tree configuration file to be loaded when Creo is started.",
      "values": "",
      "default": ""
    },
    {
      "category": "User Interface",
      "name": "menu_font",
      "description": "Specify font used in the Creo menu bar, menus, and all their children. Specify the comma-delimited variables in any order (italic bold, 24, times or 24, times, italic bold have the same effect). Any omitted variable uses the standard setting.",
      "values": "",
      "default": ""
    },
    {
      "category": "User Interface",
      "name": "menu_manager_position",
      "description": "Controls the position of the Menu Manager.  outside - Top left corner of Menu Manager is aligned to top right corner of window, inside - Top right corner of Menu Manager is aligned to top right corner of graphics area,  adaptive - Menu Manager is positioned outside if there is enough room, otherwise it is positioned inside.",
      "values": "inside, outside, adaptive",
      "default": "adaptive"
    },
    {
      "category": "User Interface",
      "name": "menu_mapper_location",
      "description": "Specify your own URL for the Menu Mapper button in the help menu.",
      "values": "",
      "default": ""
    },
    {
      "category": "User Interface",
      "name": "menu_translation",
      "description": "Specifies the language in which the menus display when running non-English version of Creo.",
      "values": "yes, no, both",
      "default": "yes"
    },
    {
      "category": "User Interface",
      "name": "modeltree_show_gen_of_instance",
      "description": "Determines whether the generic name is displayed as an extension of the instance name in the model tree and other model name lists.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "User Interface",
      "name": "msg_translation",
      "description": "Specifies language in which Messages are displayed when running non-English version of Creo.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "User Interface",
      "name": "native_kbd_macros",
      "description": "Specifies support of keyboard macros written in native language (for example, German).",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "User Interface",
      "name": "online_resources_location",
      "description": "Specify your own URL for the Online Resources button in the help menu.",
      "values": "",
      "default": ""
    },
    {
      "category": "User Interface",
      "name": "open_window_maximized",
      "description": "Open any new Creo window maximized by default. This config will override \"reserve_menu_space\" option.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "User Interface",
      "name": "param_dec_places",
      "description": "Sets the number of decimal places (0-14) to display in parameters.",
      "values": "",
      "default": "6"
    },
    {
      "category": "User Interface",
      "name": "parameter_dialog_setup_file",
      "description": "Setup for the parameter dialog configuration file.",
      "values": "",
      "default": ""
    },
    {
      "category": "User Interface",
      "name": "part_table_editor",
      "description": "Sets the editor that is used to edit notebook parameter tables. Protab - Use Pro/TABLE. Editor - Use the system editor (refer to pro_editor_command).",
      "values": "protab, editor, excel",
      "default": ""
    },
    {
      "category": "User Interface",
      "name": "pattern_relations_copy",
      "description": "Determines whether relations of pattern leader are inherited by pattern members.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "User Interface",
      "name": "popuphelp_font",
      "description": "Specify font used in the Creo pop-up help. Add the comma-delimited variables in any order (italic bold, 24, times or 24, times, italic bold have the same effect). Any omitted variable uses the standard setting.",
      "values": "",
      "default": ""
    },
    {
      "category": "User Interface",
      "name": "pro_editor_command",
      "description": "Enables use of an editor other than the system editor when the option editor has been specified as the value for the options part_table_editor or relation_file_editor.",
      "values": "",
      "default": ""
    },
    {
      "category": "User Interface",
      "name": "prompt_on_exit",
      "description": "Determines if you are prompted to save objects when exiting a Creo Parametric session.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "User Interface",
      "name": "propagate_inactive_annotation",
      "description": "Yes - causes the propagation of inactive annotation.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "User Interface",
      "name": "provide_pick_message_always",
      "description": "No - A message describing the (pre)selected item is provided only while querying. Yes - A message describing the selected item is provided in all cases (i.e. even when Query is not used).",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "User Interface",
      "name": "relation_file_editor",
      "description": "Sets the editor used to edit relations.",
      "values": "protab, editor",
      "default": "editor"
    },
    {
      "category": "User Interface",
      "name": "reserved_menu_space",
      "description": "Reserves space for extra menus to the right of the Creo window (0.0-4.0). This option overrides windows_scale.",
      "values": "",
      "default": "0.590000"
    },
    {
      "category": "User Interface",
      "name": "right_mouse_button_popup",
      "description": "Specify whether or not the right mouse button pop up menu is available or not.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "User Interface",
      "name": "selection_dragger_display_max",
      "description": "Threshold for the number of simultaneously selected items to not display draggers.",
      "values": "",
      "default": "100"
    },
    {
      "category": "User Interface",
      "name": "set_menu_width",
      "description": "Determines width of menu manager panels. Default value is equivalent to 8 character widths. Acceptable range is from 8 to 20. Values lower than 8 and higher than 20 are ignored.",
      "values": "",
      "default": "-1"
    },
    {
      "category": "User Interface",
      "name": "summary_help",
      "description": "Refers to the one-line help Messages that are either displayed or not displayed.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "User Interface",
      "name": "suppress_dlg_license_expired",
      "description": "Suppresses \"License expired: List of options and expiration days\" dialog",
      "values": "",
      "default": "7"
    },
    {
      "category": "User Interface",
      "name": "suppress_license_loss_dialog",
      "description": "Yes - Suppresses the 'Regained Floating License' dialog box. No - The 'Regained Floating License' dialog box will display.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "User Interface",
      "name": "terminal_command",
      "description": "Specifies the full path to the terminal emulator command (the command that starts shell windows). Use the command for your system. Enter the complete path name and the terminal command.",
      "values": "",
      "default": ""
    },
    {
      "category": "User Interface",
      "name": "visible_mapkeys",
      "description": "No - Mapkeys will run without displaying picks being made in the Menu Manager menus. This does not affect the display of picks being made in menu bar menus or dialog boxes.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "User Interface",
      "name": "visible_message_lines",
      "description": "Sets the default number of visible message lines in the Creo message area.",
      "values": "",
      "default": "2.000000"
    },
    {
      "category": "User Interface",
      "name": "windows_scale",
      "description": "Scales Creo windows with a given coefficient. A value of 0.85 is usually adequate to allow dynamic menus to display to the right of the Creo window.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Weld",
      "name": "add_weld_mp",
      "description": "Yes - System includes welds when calculating mass properties and approximates lightweight weld mass properties. No - System excludes welds when calculating mass properties.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Weld",
      "name": "pro_weld_params_dir",
      "description": "Specifies the directory to search when a weld parameter file is needed.",
      "values": "",
      "default": ""
    },
    {
      "category": "Weld",
      "name": "weld_ask_xsec_refs",
      "description": "No - Do not ask for X-section references when creating weld features. Yes - Ask for X-section references when creating weld features.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Weld",
      "name": "weld_color",
      "description": "Defines the default color for welds. The three decimal values specify, in this order, the percentage of red, green, and blue in the resulting color. For example, 0 0 49 specifies a medium blue.",
      "values": "",
      "default": "0.000000 0.000000 0.000000"
    },
    {
      "category": "Weld",
      "name": "weld_dec_places",
      "description": "Sets the default number of decimal places (0-10) to display in weld parameters.",
      "values": "",
      "default": "3"
    },
    {
      "category": "Weld",
      "name": "weld_edge_prep_driven_by",
      "description": "Determines if the edge preparation feature is created in the part or the  assembly level.",
      "values": "part, assembly",
      "default": "part"
    },
    {
      "category": "Weld",
      "name": "weld_edge_prep_groove_angle",
      "description": "Specifies an initial default value for the angle cut edge preparation.",
      "values": "",
      "default": "45.0"
    },
    {
      "category": "Weld",
      "name": "weld_edge_prep_groove_depth",
      "description": "Specifies an initial default value for the edge preparation depth.",
      "values": "",
      "default": "0.25"
    },
    {
      "category": "Weld",
      "name": "weld_edge_prep_instance",
      "description": "Controls whether a family table instance is created for edge preparation. Yes - Instances of the components that receive edge preparation are created.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Weld",
      "name": "weld_edge_prep_name_suffix",
      "description": "Specifies the suffix name for the instance that will be created during edge preparation. Part name plus extension makes the instance name.",
      "values": "",
      "default": "_noep"
    },
    {
      "category": "Weld",
      "name": "weld_edge_prep_root_open",
      "description": "Specifies an initial default value for the root opening edge preparation.",
      "values": "",
      "default": "0.25"
    },
    {
      "category": "Weld",
      "name": "weld_edge_prep_visibility",
      "description": "Applies only if weld_edge_prep is set to Yes. Generic - Edge preparation features are resumed in the generic and suppressed in the instance. Instance - Edge preparation features are suppressed in the generic and resumed in the instance.",
      "values": "generic, instance",
      "default": ""
    },
    {
      "category": "Weld",
      "name": "weld_geom_type_default",
      "description": "Sets the default weld geometry type. Spot welds cannot use solid geometry. so when Solid is the default, spot welds are created using surface geometry.",
      "values": "solid, light, surface",
      "default": "surface"
    },
    {
      "category": "Weld",
      "name": "weld_notch_corner_radius",
      "description": "Specifies an initial default value for the radius at weld notch corner.",
      "values": "",
      "default": "0.100000"
    },
    {
      "category": "Weld",
      "name": "weld_notch_height",
      "description": "Specifies an initial default value for the weld notch height.",
      "values": "",
      "default": "0.400000"
    },
    {
      "category": "Weld",
      "name": "weld_notch_radius",
      "description": "Specifies an initial default value for the weld notch radius.",
      "values": "",
      "default": "0.500000"
    },
    {
      "category": "Weld",
      "name": "weld_notch_width",
      "description": "Specifies an initial default value for the weld notch width.",
      "values": "",
      "default": "0.500000"
    },
    {
      "category": "Weld",
      "name": "weld_ui_standard",
      "description": "Specifies standard for welding user interface. ANSI - Use ANSI standards. ISO - Use ISO standards.",
      "values": "ansi, iso",
      "default": "ansi"
    },
    {
      "category": "Without category",
      "name": "3d_datum_display_fill",
      "description": "Set to show or hide shaded (3D) transparent color fill of datum planes.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "3d_datum_planes_transparency",
      "description": "Set transparency percentage of shaded (3D) datum planes. 0 - fully transparent.",
      "values": "",
      "default": "7"
    },
    {
      "category": "Without category",
      "name": "accessory_window_above",
      "description": "Yes - Displays and keeps the accessory window above the active window. No - Does not keep the accessory window above the active window.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "accessory_window_display",
      "description": "Docked - Displays the accessory window embedded in the active window. Undocked - Displays the accessory window as a standalone window.",
      "values": "undocked, docked",
      "default": "docked"
    },
    {
      "category": "Without category",
      "name": "advanced_rendering_mode",
      "description": "Define the mode used when launching Render Studio.  By default, the Automatic mode checks the graphics card and driver to set the mode appropriately.",
      "values": "auto, gpu, cpu",
      "default": "auto"
    },
    {
      "category": "Without category",
      "name": "aec_parameter_file",
      "description": "Specifies the file name of the user defined piping parameter codes.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "allow_color_change_for_symbols",
      "description": "Controls active/inactive state of the Color button in the Symbol creation, contextual and Format ribbon.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "allow_cyrillic_dfs_name",
      "description": "Whether or not partial parsing of Cyrillic DFS names is open or not. If open, Cyrillic DFS could be added as GTOL datum refs.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "allow_delete_many_in_drawings",
      "description": "Make the Delete Many command available in drawing mode. The Delete Many command is not supported by undo but can improve performance when deleting a significant number of items.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "allow_deprecated_config",
      "description": "Specifies an authorization code to be allowed to use a deprecated config option.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "allow_duplicate_view_names",
      "description": "Yes - allow duplicate view names.  No - disallow renaming to duplicate, warn when a drawing has existing duplicates.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "allow_gmb_tkapi",
      "description": "Yes - Allow certain APIs deprecated due to multi-body to work on multi-body models",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "allow_workpiece_silhouette",
      "description": "Determines if the workpiece is allowed for Silhouette Mach Window creation. NO - only reference part is allowed; YES - both workpiece and reference part are allowed; AUTO - only workpiece is allowed.",
      "values": "yes, no, auto",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "animation_imported_pbk_dir",
      "description": "Sets the default directory for the playback files to be used for Imported Animation.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "anlfeat_update_on_redefine",
      "description": "Force full analysis feature update (like new) on redefinition",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "annotation_snap_to_guide_range",
      "description": "Set the angle range for auto snapping of annotations leaders to guides while moving annotations. Set value to off to disable the auto snapping.",
      "values": "off, 1, 3, 2, 4, 5",
      "default": "5"
    },
    {
      "category": "Without category",
      "name": "apply_view_scale_for_shown_syms",
      "description": "Controls whether the view scale is considered when showing a variable drawing units symbol from a model in a drawing view. YES will scale the symbol height to keep the same proportion relative to the model as in 3D.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "ar_controlled_data_disclaimer",
      "description": "Disables data transfer notice during AR experience publishing.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "ar_publish",
      "description": "no - Disables Augmented Reality commands. You cannot publish or manage AR Experience models.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "arc_radius_limit",
      "description": "Sets the upper limit for a radius in a CIRCLE statement of NCL file. The value must be positive. If not, 10*part_size is used.",
      "values": "",
      "default": "-1.000000"
    },
    {
      "category": "Without category",
      "name": "ask_designate_owners",
      "description": "Show the both required and optional owners to be designated.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "assemble_module_in_rep",
      "description": "Retrieves the assembled module to CSA in a specified representation.",
      "values": "",
      "default": "representative module variant"
    },
    {
      "category": "Without category",
      "name": "atb_search_path",
      "description": "Extends search path for ATB Update and ATB Check Status commands.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "attach_last_symbol_to_cursor",
      "description": "The last placed symbol will be selected and attached to the cursor while creating a new symbol.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "attach_menumanager",
      "description": "Setup menu manager attachment to the main Creo window.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "auto_center_dimension",
      "description": "Automatically centers the dimension text between witness lines. For common reference dimensions, controls the centering of the first dimension only.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "auto_clean_shown_dimensions",
      "description": "This option controls whether the clean dimensions routine is automatically applied for newly shown dimensions. When set to NO the dimensions will be shown using their default locations from the model.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "auto_eval_current_cnfg_rule",
      "description": "If the option is \"yes\" simplified representation would be updated each time on retrieve/regeneration if it contains current configuration rule.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "auto_flex_lower_sensors",
      "description": "Defines whether flexibility on the fly should be applied when including lower-level sensors in Sensor Info and Setup in Design Assembly environment.",
      "values": "yes, no, prompt",
      "default": "prompt"
    },
    {
      "category": "Without category",
      "name": "auto_show_3d_detail_items",
      "description": "When set to yes, AEs parallel to the view will be displayed while creating a new view.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "auto_update_default_dwg_model",
      "description": "Automatically update the default drawing model to one shown in a view on the current sheet.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "backup_reference_information",
      "description": "Yes-Backup the reference information of a feature once the feature regenerates successfully. No- Do not save the reference information of a feature.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "bmx_param_restrictions",
      "description": "Restricted parameters automatically violate constraints in any Design Study",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "browser_enable_crl_check",
      "description": "Specifies if the embedded browser checks site certificate for access. The option is only applicable when the embedded browser type is set to chromium browser. Yes (default) - check site certificate and prevent from accessing site with certificate issue. No - do not check site certificate",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "check_udf_int_key",
      "description": "Yes - updates UDF internal keys upon group's retrieval. No - skips keys update.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "combined_views_customization",
      "description": "Enable / Disable combined views customization.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "comp_assemble_with_interface",
      "description": "Settings for assembling component with interface(s).",
      "values": "none, default_multi, default_single, from_list",
      "default": "default_multi"
    },
    {
      "category": "Without category",
      "name": "comp_interface_placement",
      "description": "Sets the default interface placement type. Interface to geometry - place the component using component interfaces and assembly geometry. Interface to Interface - place the component using assembly and component interfaces.",
      "values": "interface_to_interface, interface_to_geom",
      "default": "interface_to_interface"
    },
    {
      "category": "Without category",
      "name": "comp_normal_offset_eps",
      "description": "Specifies the angle epsilon such that if the desired surfaces are equal or less than the epsilon (in degrees), then a normal constraint will be created.",
      "values": "",
      "default": "10.000000"
    },
    {
      "category": "Without category",
      "name": "comp_placement_legacy_move",
      "description": "Show the legacy Move tab in the Component Placement dashboard",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "comp_snap_angle_tolerance",
      "description": "Specify the angle tolerance for snapping while freeform dragging components. Default value is 30.0 degrees.",
      "values": "",
      "default": "30.000000"
    },
    {
      "category": "Without category",
      "name": "comp_snap_dist_tolerance",
      "description": "Specify the distance tolerance for snapping while freeform dragging components.  Default value is 0.1 (relative to size of component being assembled).",
      "values": "",
      "default": "0.100000"
    },
    {
      "category": "Without category",
      "name": "confirm_on_edit_foreign_models",
      "description": "Provides a confirmation dialog when attempting to make design changes to foreign models",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "constraint_reference_redefine",
      "description": "keep_constraint_type - Adjusts the component position to keep the same constraint type. reset_constraint_type - Automatically changes the constraint type to keep the position of the component.",
      "values": "keep_constraint_type, reset_constraint_type",
      "default": "keep_constraint_type"
    },
    {
      "category": "Without category",
      "name": "contact_surfaces_gap",
      "description": "Sets the maximum allowable gap between weld contact surfaces.",
      "values": "",
      "default": "0.000000"
    },
    {
      "category": "Without category",
      "name": "convert_to_wf3_replace",
      "description": "Convert to Wildfire3 replace functionality.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "copied_table_note_text_padding",
      "description": "If set to 'source', notes in copied tables using pre-Wildfire 3 kerning/padding will continue to use the old appearance.  If set to 'new', they will be updated.",
      "values": "new, source",
      "default": "new"
    },
    {
      "category": "Without category",
      "name": "cosmetic_thread_match_tolerance",
      "description": "Sets the tolerance, which is used in the analysis to match standard thread type and standard radius, to the selected thread surface.",
      "values": "",
      "default": "0.001000"
    },
    {
      "category": "Without category",
      "name": "create_drw_sheet_thumbnails",
      "description": "Controls whether thumbnail images of drawing sheets will be generated and displayed with the drawing sheet tabs.  Setting this option to No may improve performance with large drawings.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "create_translated_ui_files",
      "description": "Allows translating copies of predefined groups and cascades in the same way as the originals. This configuration option only affects copies made after it is enabled. You do not need to keep it enabled while importing the resulting .ui files.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "creotkdat",
      "description": "Specify the full path to an additional Toolkit registry file.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "csys_color_rgb",
      "description": "Display coordinate systems in standard RGB palette or a single color.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "datum_display_default",
      "description": "Control the default display of datum planes to use model outline, referenced or predefined size.",
      "values": "modeloutline, referencesize, preconfiguredsize",
      "default": "modeloutline"
    },
    {
      "category": "Without category",
      "name": "datum_outline_default_height",
      "description": "Specify the displayed height of a datum plane defined by preconfigured size.",
      "values": "",
      "default": "25.000000"
    },
    {
      "category": "Without category",
      "name": "datum_outline_default_width",
      "description": "Specify the displayed width of a datum plane defined by preconfigured size.",
      "values": "",
      "default": "25.000000"
    },
    {
      "category": "Without category",
      "name": "default_cable_axis_location",
      "description": "Sets the location type for axis. Choose Along to create one location at each end of the axis.",
      "values": "on, along",
      "default": "on"
    },
    {
      "category": "Without category",
      "name": "default_fit_clearance_hole",
      "description": "Sets the default fit option of standard clearance holes.",
      "values": "medium, free, close",
      "default": "close"
    },
    {
      "category": "Without category",
      "name": "default_geom_analysis_type",
      "description": "Default save type for geometry analysis.",
      "values": "quick, saved, feature",
      "default": "quick"
    },
    {
      "category": "Without category",
      "name": "default_hole_top_clearance",
      "description": "Sets the default for the Top Clearance option for the Hole feature to be  on, off, or determined automatically.",
      "values": "yes, no, auto",
      "default": "auto"
    },
    {
      "category": "Without category",
      "name": "default_ref_current_module_vrnt",
      "description": "Allow references to current design solution only.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "denoise_render",
      "description": "Denoise while rendering in GPU mode.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "des_exp_folder",
      "description": "Sets the directory for the Design Exploration session. The default location is in a default system folder. Type a valid file path to change the directory to a user defined one.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "designate_model_item_params",
      "description": "When an object is designated, all parameters belonging to that object will be automatically designated as well.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "dim_background",
      "description": "Set the display of background under dimensions in modeling and in Sketcher.",
      "values": "legacy, hide, everywhere, modeling, sketcher",
      "default": "everywhere"
    },
    {
      "category": "Without category",
      "name": "dim_background_color",
      "description": "Set dimension background to contrast, global, or manual. For manual use dim_background_color_rgb to define RGB value.",
      "values": "manual, contrast, global",
      "default": "contrast"
    },
    {
      "category": "Without category",
      "name": "dim_background_color_rgb",
      "description": "Set RGB value for dimension background.",
      "values": "",
      "default": "255 255 255"
    },
    {
      "category": "Without category",
      "name": "dim_background_trans",
      "description": "Set dimension background transparency. 100 is fully transparent.",
      "values": "",
      "default": "40"
    },
    {
      "category": "Without category",
      "name": "disp_in_open_rep_create",
      "description": "Simplified Rep to display initially in Open Rep Create: \"No\" for none, \"Yes\" for graphics rep, or \"Default Rep\" to display the rep indicated by option \"open_simplified_rep_by_default\".",
      "values": "yes, no, default rep",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "display_all_dims",
      "description": "Controls the display of dimensions during dynamic edit.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "display_combined_views",
      "description": "Display combined view tabs by default",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "display_images",
      "description": "Yes - Display images added to the model. No - Do not display images.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "display_lattices_in_hq",
      "description": "Improve the quality of shaded representation of simplified lattices.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "display_mapkeys_dialog_on_top",
      "description": "Controls whether mapkeys dialog will be displayed always on top (yes) or behind the main window (no).",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "display_pdm_server_quick_view",
      "description": "Yes - display summary view of PDM information for items in session. It applies to ProductPoint only.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "display_popup_viewer",
      "description": "No- disable popup viewer, File_Open_Only: display popup viewer only in the file open dialog, Yes: display popup viewer in file open dialog, model tree and in Server Quick View dialog",
      "values": "yes, no, file_open_only",
      "default": "file_open_only"
    },
    {
      "category": "Without category",
      "name": "display_thick_lattices",
      "description": "Display beams of simplified lattices in shaded representation.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "dm_enable_simple_import_export",
      "description": "Enable a simplified method of import/export between disk and Workspace.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "dm_pki_authentication_url",
      "description": "Specifies the authentication url for Single Sign On integration to Windchill with PKI (Public Key Infrastructure)",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "dm_preview_searches_server",
      "description": "Search for files on the server while previewing.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "dpi_scale",
      "description": "The custom display scaling size to be used to scale GUI elements and controls, overriding the setting in use on the desktop. Enter a custom scaling size between 100 and 500. All Creo windows will use this custom scaling size on all displays.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "draft_preserve_inlying_rounds",
      "description": "Determines if inlying round surfaces will be preserve, not drafted.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "draft_tan_propagation_default",
      "description": "Determines if draft is automatically propagated along tangent surfaces.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "drilled_hole_tip_angle",
      "description": "Sets the default value of the tip angle of drilled holes. Enter a value from 60 through 180 degrees.",
      "values": "",
      "default": "118.000000"
    },
    {
      "category": "Without category",
      "name": "drilling_ui_diam_mode",
      "description": "Enables the diameter selection mode by default.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "drw_prompt_for_combined_state",
      "description": "Determines whether the combined state prompt will appear in a drawing when creating a view.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "dwg_legacy_annotation_msg",
      "description": "Defines the type of warning message that appears when you open a drawing with legacy datums. When set to no, message appears in a transient balloon. When set to yes, message appears in a box. When set to none, no message appears.",
      "values": "yes, no, none",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "dwg_unicode_conv_lang_scope",
      "description": "Specifies scope of the option 'dwg_unicode_conversion_language'. '2D' to apply to 2D models only, 'ALL' to apply to all models.",
      "values": "all, 2d",
      "default": "2d"
    },
    {
      "category": "Without category",
      "name": "ecad_comp_follow_board",
      "description": "Sets the default value of the follow (board) surface option for an ECAD component.  Choosing Yes will allow placed components to follow the bending of the board.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "ecadcollab_auto_redef_cuts",
      "description": "Automatically redefine ECAD Cuts affected by collaboration changes",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "edge_tess_quality",
      "description": "Set the accuracy level for arc tessellation.",
      "values": "high, medium, low",
      "default": "low"
    },
    {
      "category": "Without category",
      "name": "enable_3dmodelspace_browser_tab",
      "description": "Yes - Display 3D ModelSpace tab in the browser when Creo starts. No - Display 3D ModelSpace tab only when you click a 3D ModelSpace link in the navigator.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "enable_cmm_refcsys_pprint_fix",
      "description": "It will be used for enable/disable applicable pprint for cmm reference csys. Yes :- Enable No :- Disable",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "enable_cutcom_apprexit_fix",
      "description": "Approach and exit loops are not offsetted together with cutting loops while getting cutcom loops.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "enable_cutcom_helix_corner",
      "description": "Uses corner point of linear helical chains in cutcom output.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "enable_cutcom_rm_tiny_ents",
      "description": "Removes tiny entity between arc and line entities during cutter compensation with stock allowance.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "enable_face_preselection",
      "description": "Controls the ability to \"pre-select\" faces/datums as an entry to Sketch based features such as Extrude, Revolve (input to the internal sketch).",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "enable_feed_rate_for_helix",
      "description": "Enables feed rate output at tool perimeter for helix circular chains.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "enable_finishing_circ_record",
      "description": "Yes - Generates circle records for finishing sequence profile cuts when seqeunce parameter circ_interpolation is set to arc_only",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "enable_imp_valid_flyout_menu",
      "description": "",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "enable_legacy_datum_planes",
      "description": "Display legacy (2D) datum planes instead of the enhanced 3D shaded version.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "enable_mfg_leadtilt_ang_fix",
      "description": "Fixes tilt angle at the non-tangent junctions of tool path.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "enable_mfg_reorder_regen_fix",
      "description": "Reduces regeneration time while reordering manufacturing features, if tool relations are used to drive nc sequence parameters.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "enable_obsoleted_features",
      "description": "",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "enable_offset_fan_curve",
      "description": "Enables fan curve option for offset tool.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "enable_opengl_shader",
      "description": "Enable advanced OpenGL capabilities including HDR lighting, Ambient Occlusion and Order Independent Transparency",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "enable_partcommunity_tab",
      "description": "Yes - Display PartCommunity tab in the browser. No - Do not display the tab.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "enable_punditas_browser_tab",
      "description": "Yes - Display Punditas tab in the browser when Creo starts. No - Do not display the tab.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "enable_single_char_keybrd_short",
      "description": "Enable single-character and shift+character keyboard shortcuts",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "enable_traj_2cntr_toolaxis_fix",
      "description": "Fixes tool axis direction in trajectory tool path with pivot curve.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "esr_mass_properties",
      "description": "Defines whether to include all immediate components of external simplified rep  into Mass Properties calculations or only defined state of design assembly.",
      "values": "design_only, extended",
      "default": "design_only"
    },
    {
      "category": "Without category",
      "name": "export_profiles_3mf",
      "description": "Saved 3MF export profile used to initialize 3MF export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_acis",
      "description": "Saved Acis export profile used to initialize Acis export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_amf",
      "description": "Saved AMF export profile used to initialize AMF export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_cadds5",
      "description": "Saved CADDS5 export profile used to initialize CADDS5 export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_catia_v4",
      "description": "Saved Catia V4 export profile used to initialize Catia V4 export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_catia_v5",
      "description": "Saved Catia V5 export profile used to initialize Catia V5 export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_catia_v5_cgr",
      "description": "Saved Catia V5 CGR export profile used to initialize Catia V5 CGR export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_creoview",
      "description": "Saved Creo View export profile used to initialize Creo View export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_dwg",
      "description": "Saved DWG export profile used to initialize DWG export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_dxf",
      "description": "Saved DXF export profile used to initialize DXF export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_iges",
      "description": "Saved IGES export profile used to initialize IGES export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_inventor",
      "description": "Saved Inventor export profile used to initialize Inventor export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_jt",
      "description": "Saved JT export profile used to initialize JT export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_medusa",
      "description": "Saved Medusa export profile used to initialize Medusa export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_neutral",
      "description": "Saved Neutral export profile used to initialize Neutral export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_nx",
      "description": "Saved NX export profile used to initialize NX export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_optegra_vis",
      "description": "Saved Optegra Vis export profile used to initialize Optegra Vis export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_parasolid",
      "description": "Saved Parasolid export profile used to initialize Parasolid export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_render",
      "description": "Saved Render export profile used to initialize Render export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_solidworks",
      "description": "Saved SolidWorks (part and assembly) export profile used to initialize SolidWorks export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_step",
      "description": "Saved STEP export profile used to initialize STEP export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_stl",
      "description": "Saved STL export profile used to initialize STL export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_vda",
      "description": "Saved VDA export profile used to initialize VDA export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_wavefront",
      "description": "Saved Wavefront export profile used to initialize Wavefront export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "export_profiles_xpatch",
      "description": "Saved Xpatch export profile used to initialize Xpatch export profile settings for the new Creo session",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "extended_context_prehighlight",
      "description": "Control pre-highlighting of extended context when over relevant commands",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "fasthlr_drawing",
      "description": "Specifies whether fast hidden line removal is on/off by default.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "file_dialog_units_class",
      "description": "Sets the units for manikin attributes displayed in the File Open dialog.",
      "values": "mks, ips",
      "default": "mks"
    },
    {
      "category": "Without category",
      "name": "file_timestamp_format",
      "description": "Controls the format of time stamps in file dialogs and the folder browser. The format for the setting is a string consisting of up to seven portions: the year, the month, and the date, the hours, minutes, seconds and am/pm designator. You can enter the portions in any order.",
      "values": "",
      "default": "%dd-%mmm-%yy %hh:%mi:%ss %pm"
    },
    {
      "category": "Without category",
      "name": "flex_dflt_selection_srf_region",
      "description": "In Flexible Modeling mode sets the default selection filter option to surface regions.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "flex_dma_reduce_solution_number",
      "description": "Reduces the number of default solutions found in Flexible Modeling features, when modifying geometry with mixed convexity contours.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "flex_tan_propagation_default",
      "description": "Defines default state of the Tangency Propagation option in Flexible Modeling features.",
      "values": "off, on",
      "default": "off"
    },
    {
      "category": "Without category",
      "name": "gdx_controlled_data_disclaimer",
      "description": "Disables data transfer notice during Generative Design study publishing.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "group_repl_with_recycle",
      "description": "Yes - enables new UDF replacement with family table instances that prevents children failures. No - UDF replacement will work in the same manner as Wildfire 3.0 and earlier releases.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "group_replace_rename",
      "description": "Yes - updates replaced group name with replacement group name. No - preserves existing name of the group being replaced if it is a user-given name.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "grv_turn_bothdir_cutcom_output",
      "description": "Outputs CUTCOM OFF statement before retract motion in case of alternate side groove turning.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "gui_button_spacing",
      "description": "Sets the spacing between command buttons. mouse - Standard spacing, optimized for use with mouse. touch - Increased spacing, optimized for use with touch-screen. auto_detect - Use increased spacing when touch-screen is detected, otherwise use standard spacing.",
      "values": "mouse, touch, auto_detect",
      "default": "auto_detect"
    },
    {
      "category": "Without category",
      "name": "hdic_export_v5_secondary_cgr",
      "description": "In HDIC export for CATIA V5 allows to attach CGR as a secondary content",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "hdic_export_v5_to_ws_enable",
      "description": "Enables HDIC export for CATIA V5 to Workspace.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "hide_pre_creo4_reps",
      "description": "yes - Hides all pre Creo 4.0 simplified representations except for Exclude. no - Maintains all pre Creo 4.0 simplified representations. maintain master - Hides all pre Creo 4.0 simplified representations except for Master and Exclude.",
      "values": "yes, no, maintain_master",
      "default": "maintain_master"
    },
    {
      "category": "Without category",
      "name": "high_dpi_enabled",
      "description": "Enable High-DPI Awareness, scaling GUI elements and controls according to the DPI in use on the desktop.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "high_dpi_text_enabled",
      "description": "Scale in-graphics text elements according to the DPI in use on the desktop.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "highlight_skip_small_surfaces",
      "description": "Control small surface rejection while rendering highlighted items. This option is only used if skip_small_surfaces is enabled.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "idd_repair_tangency",
      "description": "Sets the default state of the \"Repair Tangency\" checkbox in the Repair and Match tools",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "import_profiles_3mf",
      "description": "3mf import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_acis",
      "description": "Acis import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_acs",
      "description": "ACS import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_ai",
      "description": "AI import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_cadds5",
      "description": "CADDS5 import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_catia_v4",
      "description": "Catia V4 import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_catia_v5",
      "description": "Catia V5 import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_cdrs",
      "description": "CDRS import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_ced",
      "description": "CED import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_cgm",
      "description": "CGM import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_creoview",
      "description": "Creo View import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_dwg",
      "description": "DWG import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_dxf",
      "description": "DXF import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_ibl",
      "description": "IBL import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_icem",
      "description": "ICEM import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_iges",
      "description": "IGES import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_inv",
      "description": "Inventor import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_jt",
      "description": "JT import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_medusa",
      "description": "Medusa import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_neutral",
      "description": "Neutral import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_nx",
      "description": "NX import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_parasolid",
      "description": "Parasolid import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_pts",
      "description": "PTS import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_rhino",
      "description": "RHINO import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_solid_edge",
      "description": "Solid edge import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_solidworks",
      "description": "Solidworks import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_step",
      "description": "STEP import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_stheno",
      "description": "STHENO import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_stl",
      "description": "STL import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_vda",
      "description": "VDA import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_vrml",
      "description": "VRML import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_vtx",
      "description": "VTX import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "import_profiles_wavefront",
      "description": "Wavefront import profile path",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "jlink_java_command",
      "description": "Specifies a command to start JRE for J-Link. May contain arguments and environment variables. Overrides the default, see also jlink_java2.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "js_error_policy",
      "description": "Control the display and execution of the java script error dialogs.  If the dialog is presented, the user can choose whether to stop or continue running the script.",
      "values": "show, suppress_continue, supress_stop",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "keep_model_in_open_window",
      "description": "Controls whether a model is displayed in its window when  the accessory window is open.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "keep_publish_geom_in_footer",
      "description": "Disables moving a Publish Geometry feature out of footer. Yes - Publish Geometry feature cannot be moved out of footer. No - Publish Geometry feature can be moved out of footer.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "last_session_directory_path",
      "description": "Sets the directory that holds the temp files for the session recording mechanism.",
      "values": "",
      "default": "<work_dir>\\appdata\\roaming\\ptc\\proengineer\\wildfire\\.wf\\.settings"
    },
    {
      "category": "Without category",
      "name": "last_session_retrieval",
      "description": "Yes - Activates recording mechanism that enables the session to be retrieved during the next session. No - The recording mechanism is not available and the session can not be retrieved.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "layer_rule_retrieve_objects",
      "description": "This option controls whether or not the system will retrieve additional objects needed to evaluate a layer rule. OK tells the system to retrieve the objects. Cancel stops evaluation of the rule.",
      "values": "ok, cancel, promt",
      "default": "promt"
    },
    {
      "category": "Without category",
      "name": "layout_data_sharing",
      "description": "Allows to change the default ce entity type to be public or private.",
      "values": "private, public",
      "default": "private"
    },
    {
      "category": "Without category",
      "name": "layout_guides",
      "description": "Enable/Disable layout guides.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "layout_smart_constraints",
      "description": "To improve the user experience, specific entity types are appropriately constrained by default (i.e. - fillets with tangency constraints). Yes - specific entity types will be created with appropriate constraints by default; No - constraints will never be automatically created for any entity type.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "layout_symbol_inst_palette_file",
      "description": "Specifies the location of the layout symbol instance palette. If you do not specify a directory, layout will use the same palette as Creo drawings. Use full path name to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "layout_template_dir",
      "description": "Specifies the default directory for layout template files.  Use full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "lda_batch_mapping_option",
      "description": "Specifies the options for mapping in LDA from dBatch.",
      "values": "all, model_only, views_only, annotations_only, model_and_views, views_and_annotations",
      "default": "all"
    },
    {
      "category": "Without category",
      "name": "lda_map_file",
      "description": "Path to the file containing the list of matching drawings and solid models.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "lda_model_dir",
      "description": "Path to the directory containing the solid models.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "lda_overall_view_map_time_limit",
      "description": "Specifies LDA overall view mapping time limit in seconds.",
      "values": "",
      "default": "300.000000"
    },
    {
      "category": "Without category",
      "name": "lda_prefix_in_basic_dim_box",
      "description": "Add prefix to basic box while converting the dimension to basic.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "lda_show_entities_default",
      "description": "Speicify whether to show mapped draft entities by default in Validate Association Dialog.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "lda_view_map_time_limit",
      "description": "Specifies LDA single view mapping time limit in seconds.",
      "values": "",
      "default": "60.000000"
    },
    {
      "category": "Without category",
      "name": "light_weld_hidden_color",
      "description": "Defines the default color for light welds that are hidden by overlapping geometry. The three decimal values specify, in this order, the percentage of red, green, and blue in the resulting color. For example, 0 0 49 specifies a medium blue.",
      "values": "",
      "default": "0.000000 0.000000 0.000000"
    },
    {
      "category": "Without category",
      "name": "live_dim_precision_decimals",
      "description": "Display 0 to 5 decimal places in precision panels",
      "values": "1, 3, 2, 4, 5",
      "default": "2"
    },
    {
      "category": "Without category",
      "name": "manikin_drag_auto_locks",
      "description": "Manikin drag auto locks",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "manikin_drag_legacy_rotate",
      "description": "Controls the Manikin Rotate Around Axis drag mode: Legacy (YES) or direct joint angle control (NO)",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "manikin_flexibility",
      "description": "Sets the level of flexibility that is allowed when dragging a manikin. FULL - All Manikin segments are articulated.  NONE - Manikin is calculated as a single body. DEFAULT - Manikin finger segments are locked to a single body.",
      "values": "none, default, full",
      "default": "default"
    },
    {
      "category": "Without category",
      "name": "manikin_replace_keep_posture",
      "description": "Controls whether a manikin's existing posture is applied to a replacement manikin.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "mass_prop_load_from_file",
      "description": "Controls whether to take into the account values from mass properties file.",
      "values": "by_request, always",
      "default": "by_request"
    },
    {
      "category": "Without category",
      "name": "mdl_legacy_annotation_msg",
      "description": "Defines the type of warning message that appears when you open a model with legacy datums. When set to no, message appears in a transient balloon. When set to yes, message appears in a box. When set to none, no message appears.",
      "values": "yes, no, none",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "measure_auto_replace_mode",
      "description": "Automatically switches to Replace mode for the last reference in appropriate Measures (Distance, Angle, Transform)",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "measure_dec_places",
      "description": "This configuration option controls the number of digits after the decimal point. If value = -1, this configuration is ignored and measure_sig_figures is used",
      "values": "",
      "default": "-1"
    },
    {
      "category": "Without category",
      "name": "measure_dialog_expand",
      "description": "Determines default look of measure dialog (expanded or collapsed)",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "measure_ref_option_status",
      "description": "Determine As Object (As Center et al.) checkbox option behavior in Measure Tool",
      "values": "default, all_on, all_off, keep_last",
      "default": "default"
    },
    {
      "category": "Without category",
      "name": "measure_show_feattab",
      "description": "Controls initial display of the Feature tab in Measure Tool. Yes - feature tab is always displayed by default. No - feature tab state is saved for the duration of the session upon closing of the dialog.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "mfg_assign_param_formula",
      "description": "\"Yes\" to apply default values of mfg basic parameter using the XML-based formulas. \"No\" to ignore default values of mfg basic parameter using the XML-based formulas.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "mfg_clfile_excl_seq_warn",
      "description": "Warn about excluded sequences before CLFile Output.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_cutlin_helix_norm_gouge_fix",
      "description": "YES- Avoids gouges in Cutline having closed cutlines and scan_type is set to TYPE_HELICAL and creates toolpath relative to surface normals when USE_SURF_NORMS is used.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "mfg_deepgrv_turn_typ1_conn_fix",
      "description": "Yes - generates groove turning toolpath in narrow deep grooves for scan type type_1_connect.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_drill_axis_arrow_color",
      "description": "Control the color of mfg hole flip arrow using system colors",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_drill_cln_undesired_wp_dep",
      "description": "Yes - Cleans undesired workpiece dependency in drilling sequence during retrieval",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_finish_round_corner_fix",
      "description": "Yes - Creates smooth toolpaths at round corners in finishing sequence",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_grvturn_same_toolwidth_fix",
      "description": "Yes - generates groove turning toolpath in grooves having same width as tool width",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_grvturn_sideturn_gouge_fix",
      "description": "Yes - Avoids gouge in groove turning for side_turn by minimizing the side turn plunge.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_grvturn_typ1_full_tpathfix",
      "description": "Yes -  Creates complete groove turning toolpath with scan_type TYPE_1 on turn profiles with angled walls.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_grvturn_wall_colision_fix",
      "description": "Yes - Avoids collisions in groove turning for scan_type type_one_wall by machining unmachined areas",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_millvol_outside_wp_fulltrim",
      "description": "Check if mill volume is intersects the workpeice to generate toolpath when FULL_TRIM is used",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "mfg_optimized_drill_toolpath",
      "description": "When scan_type is set to 'SHORTEST', this will calculate optimum drill toolpath.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_prof_rapid_feed_prev_slice",
      "description": "Connects end of previous slice and start of new slice with free feed in Profile milling step.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "mfg_single_grv_toolwidth_fix",
      "description": "Yes - fixes roughstock allowance in groove turning toolpath where groove width is same as toolwidth + twice the z stock allowance",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_skew_circ_goto_convert_fix",
      "description": "Yes - Converts Circle records whose axis is skew with tool axis to goto points and output in ncl file",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_skip_synch_head_both",
      "description": "YES: Skips the output of the HEAD/BOTH & HEAD/OFF statements in the cl data for synchronized steps; NO: Outputs HEAD/BOTH & HEAD/OFF statements in the cl data for synchronized steps",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_synch_master_slave_output",
      "description": "YES: Outputs the MASTER-SLAVE keywords along with the HEAD# statement in the cl data for synchronized steps; NO: Does not output the MASTER-SLAVE keywords along with the HEAD# statement in the cl data for synchronized steps",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_tool_dependency_enbld",
      "description": "YES: Saves the solid tool models on saving the mfg assembly; NO: Does not save the solid tool on saving the mfg assembly",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "mfg_traj_end_height_enable",
      "description": "Yes - Enables user to select surface to define the end height in trajectory sequence",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_turn_byarea_last_slice",
      "description": "Creates last slice in last zone in turning when STEP_DEPTH_COMPUTATION is BY_AREA",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "mfg_turn_overtravel_conn_fix",
      "description": "Yes - Consider END_OVER_TRAVEL in connection move of area turning sequence.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "mfg_turn_rgh_prof_overtravel",
      "description": "Enables overtravel on profile pass when rough_and_prof is chosen in Area turning",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_turn_stock_gouge_fix",
      "description": "Yes - Avoid gouge in Turning for parameter TRIM_TO_WORKPIECE when Stock boundary is less than Turn Profile.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_turn_variable_stk_allowance",
      "description": "Show STOCK ALLOWANCE option in Turning Cut dialog.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "mfg_upd_mdl_frm_prt_coll",
      "description": "",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "mfg_vol_helicalentry_gougefix",
      "description": "Yes - Avoids gouge in Volume milling helical entry motion",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_vol_roughprof_entryexit_fix",
      "description": "Based on Ramp angle, CUT_ENTRY_EXT,CUT_EXIT_EXT values, both entry,exit motions will be added to volume milling toolpath.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "mfg_volmil_clear_dist_fix",
      "description": "No -  The clearance distance calculation based on workpiece outline.  Yes -  The clearance distance calculation based on workpiece outline, mill volume/mill window, retract plane, user specified height.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "model_tree_font",
      "description": "Specify font used in the Creo Model Tree. specify the comma-delimited variables in any order (italic bold, 24, times or 24, times, italic bold have the same effect). Any omitted variable uses the standard setting.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "model_tree_selection_priority",
      "description": "Determine selection priority in Model Tree when selecting elements from the graphic window.",
      "values": "design_items, feature_list",
      "default": "feature_list"
    },
    {
      "category": "Without category",
      "name": "modelcheck_dir",
      "description": "Specifies path to the ModelCHECK configuration files.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "module_variant_cross_refs",
      "description": "Allow references between design solutions in Module",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "moduleworks_setup_file",
      "description": "Specify name and path of the file containing Moduleworks setup information.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "mold_split_dont_merge_same_srfs",
      "description": "Do not merge same split surfaces when splitting for colors to be extracted.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "mp_analysis_default_source",
      "description": "Specifies the default source for mass properties calculation via Analysis.",
      "values": "geometry, assigned, mp_source",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "mp_calc_level",
      "description": "Specifies the level of mass properties calculation.",
      "values": "assembly_only, all_models",
      "default": "assembly_only"
    },
    {
      "category": "Without category",
      "name": "msr_regen_special_refs",
      "description": "Force special reference regeneration for some types of analyses",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "multiple_skeletons_allowed",
      "description": "Allows/restricts multiple skeleton.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "new_ref_part_name_disabled",
      "description": "Disallow redirecting data sharing feature missing reference model to a model with different name.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "nmgr_annotation_warning",
      "description": "Annotations with missing references",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning"
    },
    {
      "category": "Without category",
      "name": "nmgr_critical_server_info",
      "description": "Critical server information.",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Without category",
      "name": "nmgr_disconnected_sensor",
      "description": "Show notification when some parameters of a sensor are not connected to a model property or analysis.",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Without category",
      "name": "nmgr_failed_annotation",
      "description": "Annotation failure",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "error"
    },
    {
      "category": "Without category",
      "name": "nmgr_failed_drf_csys",
      "description": "DRF coordinate system failure",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "error"
    },
    {
      "category": "Without category",
      "name": "nmgr_feat_not_meet_standard",
      "description": "Show notification when feature does not meet standard",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Without category",
      "name": "nmgr_model_in_discon_state",
      "description": "Show notifications when model is disconnected",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Without category",
      "name": "nmgr_multi_material_model",
      "description": "Show notification when part has bodies with assigned material",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Without category",
      "name": "nmgr_outdated_gds_dom",
      "description": "Show notification when Generative Design Feature is outdated",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning"
    },
    {
      "category": "Without category",
      "name": "nmgr_outdated_mp",
      "description": "Show notification when mass properties require recalculation",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Without category",
      "name": "nmgr_server_warning",
      "description": "Server warning.",
      "values": "warning, error, do_not_show, warning_with_message",
      "default": "warning_with_message"
    },
    {
      "category": "Without category",
      "name": "nmgr_toaster_bhvr",
      "description": "Determine the behavior of Notification Center post-regeneration pop-up dialog.",
      "values": "show, dont_show, show_and_dissolve",
      "default": "show_and_dissolve"
    },
    {
      "category": "Without category",
      "name": "notify_deprecated_config",
      "description": "Specifies whether to notify the user when attempting to use deprecated config options.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "old_style_set_datum",
      "description": "Yes - datum properties dialog has button for old-style set datum. No - datum properties dialog does not have button for old-style set datum.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "open_builder_in_mt_mode",
      "description": "Open the variant builder in Model Tree Selection mode",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "open_protk_signed_apps",
      "description": "Control whether signed Toolkit applications can be loaded in a Creo session: Always – Always load signed applications. Never – Never load signed applications. Prompt – Ask the user whether to load a signed application.",
      "values": "never, always, prompt",
      "default": "always"
    },
    {
      "category": "Without category",
      "name": "open_protk_unsigned_apps",
      "description": "Control whether unsigned Toolkit applications can be loaded in a Creo session: Always – Always load unsigned applications. Never – Never load unsigned applications. Prompt – Ask the user whether to load an unsigned application.",
      "values": "never, always, prompt",
      "default": "prompt"
    },
    {
      "category": "Without category",
      "name": "orientation_style",
      "description": "Set spin orientation style to dynamic or anchored.",
      "values": "anchored, dynamic",
      "default": "dynamic"
    },
    {
      "category": "Without category",
      "name": "output_start_goto_pnt_of_seq",
      "description": "Output duplicate GOTO point at the start of nc feature, if previous nc feature ends at same GOTO point.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "pdm_server_quickview_rows_num",
      "description": "Sets the default number of rows for the pdm quick view list.",
      "values": "",
      "default": "7"
    },
    {
      "category": "Without category",
      "name": "perspective_zoom",
      "description": "Sets the perspective zoom while in perspective mode to follow image zoom or eye distance",
      "values": "eye_distance, image_zoom",
      "default": "eye_distance"
    },
    {
      "category": "Without category",
      "name": "place_comp_use_mate_align_type",
      "description": "Component placement constraint type mate and align will be displayed.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "plot_names_with_sheet",
      "description": "Yes - Plot file names are appended with _(sheet number) before file extension.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "popup_refpairintch_window",
      "description": "Bring forward the window being used with the reference pairing table.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "pre_creo7_udf_body_prompt_lang",
      "description": "The language of the UDF prompt for body references added by the system.",
      "values": "english, locale",
      "default": "english"
    },
    {
      "category": "Without category",
      "name": "primary_monitor",
      "description": "The number of the display to treat as the primary monitor on which to launch Creo, overriding the setting in use on the desktop. Enter a value between 1 and the number of displays on the desktop.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "prime_analysis_directory",
      "description": "Sets the default directory for the Prime files to be used for Prime analysis calculations. Use the full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "prime_automapping",
      "description": "Toggles Prime analysis automapping of variables",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "propagate_by_default",
      "description": "Yes - If the modified geometry belongs to a geometry pattern, a pattern recognition feature or a symmetry recognition feature, the modification is automatically propagated to all pattern/symmetry members.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "ptc_manikin_comforts_path",
      "description": "Sets the default directory for the Creo manikin comfort angles. You must restart Creo for the change to take effect.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "ptc_manikin_library_path",
      "description": "Sets the default directory for the Creo manikin library (or custom manikin libraries you built containing the proper index menu files). Use the full path name to avoid problems.  You must restart Creo for the change to take effect.",
      "values": "",
      "default": "<creo_loadpoint>\\manikin_lite\\"
    },
    {
      "category": "Without category",
      "name": "ptc_manikin_posture_path",
      "description": "Sets the default directory for the Creo manikin postures (or custom posture libraries you built). Use the full path name to avoid problems.  You must restart Creo for the change to take effect.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "ptc_reported_material_mp_report",
      "description": "Specifies what to show in the Mass Properties report when the PTC_REPORTED_MATERIAL parameter contains values of multiple materials. list - shows complete list of materials assigned to all bodies in the part. multi-material - shows the string \"MULTI-MATERIAL.\" empty - shows an empty field.",
      "values": "list, multi-material, empty",
      "default": "list"
    },
    {
      "category": "Without category",
      "name": "publish_personal_ar",
      "description": "Setting option to \"no\" prevents user from publishing models to Personal account. User is still able to publish to Premium accounts where available.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "qty_balloon_change_warning",
      "description": "Sets the warning style when quantity balloons have changed in a drawing.  Dialog displays the warning in a dialog box, Message displays the warning in the message area only.",
      "values": "dialog, message",
      "default": "dialog"
    },
    {
      "category": "Without category",
      "name": "quick_print_drawing_template",
      "description": "Specify the path and name of a drawing template to be used by the File > Quick Print command.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "quick_print_plotter_config_file",
      "description": "Specify the path and name of the default plotter config file to be used by the File > Quick Drawing command.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "radial_hole_linear_dim",
      "description": "YES - Option for creation of radial hole with a linear dimension will be available.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "record_mapkey_comment_to_trail",
      "description": "Controls whether a comment is written to the trail file whenever a mapkey is executed.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "ref_color_name_fix",
      "description": "Allocate color names on retrieval for colors not having names.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "regen_int_mdls_on_retr",
      "description": "Yes to regen models intersected with assem feats during assembly retrieval.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "regen_solid_before_save",
      "description": "Controls whether to regenerate top model,  or promot user before regeneration if it is required",
      "values": "yes, no, prompt, force",
      "default": "prompt"
    },
    {
      "category": "Without category",
      "name": "relations_ang_eval_diff_check",
      "description": "Check for differences in the evaluation of relation sets evaluated and saved in versions of Creo 2.0 prior to M110. Warn_message Check and give a warning in the message area.  Warn_dialog  Check and give a warning in a message window. Ignore  Skip the check and warning.",
      "values": "ignore, warn_message, warn_dialog",
      "default": "warn_message"
    },
    {
      "category": "Without category",
      "name": "relations_num_const_units",
      "description": "Specifies whether diagnostic should be issued when an unitless numeric value causes relation expression evaluation trouble.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "relations_units_sensitive",
      "description": "Set the default unit sensitivity (ignore or take into account parameter/dimensions units) in creation of new relation data (legacy relation data will not be unit sensitive until \"converted\" to one).",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "remember_last_attach_type",
      "description": "Yes - Sets the default of the ATTACH TYPE menu of the last options picked.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "remember_replaced_components",
      "description": "Set to \"Yes\" this option will preserve a dependency to the replaced, outgoing, component. Set to \"No\" the dependency will, when possible, be removed.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "remove_stacked_non_graphical_ae",
      "description": "Yes - When removing an annotation element from an annotation feature, its stacked annotations which become non-graphical will be automatically removed if they do not contain user  defined references or not being referenced by other annotations",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "replace_comp_notes_method",
      "description": "Specify treatment of notes when components are replaced. Transfer - transfer to new component. Remove - remove the notes. Preserve - save notes in case component is restored.",
      "values": "transfer, remove, preserve",
      "default": "transfer"
    },
    {
      "category": "Without category",
      "name": "reroute_affected_children",
      "description": "Affected children when setting Current solution.",
      "values": "none, auto, selective",
      "default": "selective"
    },
    {
      "category": "Without category",
      "name": "reset_hole_note_at_edit",
      "description": "Resets the note in standard hole when editing the feature definition.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "restricted_val_definition",
      "description": "Specify name and path of the file contained restricted values definition.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "retrieve_display",
      "description": "Controls whether or not graphics data is loaded in the background.",
      "values": "background, foreground",
      "default": "background"
    },
    {
      "category": "Without category",
      "name": "retrieve_merge_ref_parts",
      "description": "Define whether the reference model of merge feature set to automatic update or manual update with notification, will be retrieved to the session by default.",
      "values": "yes, no, ignore_missing",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "rmv_xsec_unlinked_cosm_feats",
      "description": "Specify whether to automatically try to delete, or to detach from the feature list, the internal sketch features which were unlinked from offset cross sections, and whether to do it only upon sketch unlinking, or upon model retrieval too.",
      "values": "none, detach_on_unlink, delete_on_unlink, detach_on_both, delete_on_both",
      "default": "detach_on_unlink"
    },
    {
      "category": "Without category",
      "name": "rotation_handle_snap_interval",
      "description": "Sets the angle interval if applying Shift while using 2D rotation handle.",
      "values": "",
      "default": "15.000000"
    },
    {
      "category": "Without category",
      "name": "round_prewf5_displayed_dim_val",
      "description": "Rounds the displayed value",
      "values": "round all, round none, calculated",
      "default": "calculated"
    },
    {
      "category": "Without category",
      "name": "save_view_states_method",
      "description": "Setup the method used on saving view states changes.",
      "values": "prompt, save changes, discard changes",
      "default": "prompt"
    },
    {
      "category": "Without category",
      "name": "shade_with_edge_tangent",
      "description": "Display Tangent edges in Shade with Edge view mode.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "show_affected_children_dialog",
      "description": "Do not invoke dialog for setting Current solution.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "show_axes_by_view_scope",
      "description": "Determines the scope of the Show Model Annotations tool when showing model datums and selecting a drawing view. For large assembly drawings, use top_model_only to improve performance by restricting the set of axes to be shown.",
      "values": "top_model_only, all_sub_models",
      "default": "top_model_only"
    },
    {
      "category": "Without category",
      "name": "show_description_view_mgr",
      "description": "Yes - show a column for Description field for all tabs in view manager.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "show_object_type_in_taskbar",
      "description": "Yes - Displays the icon of the open Creo object in the taskbar and window title bar. For all Creo applications except Creo Parametric, icons include a letter indicating the application name. No - Displays the Creo application icon in the taskbar and window title bar.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "show_persp_type_om",
      "description": "Show the perspective type options.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "show_sketch_dims_in_feature",
      "description": "Sets the default display state of internal sketch dimensions in the feature definition environment.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "sim_display_current_csys_triad",
      "description": "Toggle display of the current coordinate system triad in the lower right corner of the window.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "sim_display_interfaces",
      "description": "Toggle display of structure connection icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "sim_display_shell_pairs",
      "description": "Toggle the display of shell pairs.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "sim_display_z_buffered",
      "description": "Toggle z-buffered display of Creo Simulate icons.",
      "values": "yes, no",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "sim_ext_distribution_dir",
      "description": "Specifies the location of external distribution files for loads.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "sim_nastran_use_coupmass",
      "description": "Add PARAM,COUPMASS,1 in the Nastran deck file to enforce consistent mass matrix generation.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "sim_output_obj_names",
      "description": "Output Beam Sections names, Analyses names, Coordinate Systems names as comments.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "sim_run_num_threads",
      "description": "Specify the number of CPUs that Creo Simulate Native mode will use for running the analysis. The possible values are: ALL (default), ALL_BUT_1, ALL_BUT_2, 2, 1, HALF.",
      "values": "all, 1, 2, all_but_1, all_but_2, half",
      "default": "all"
    },
    {
      "category": "Without category",
      "name": "simprep_column_display",
      "description": "Controls display of Simplified Representations columns in Model Tree,  'Automatic'-'Current Rep' column is shown automatically when a rep is activated, 'Manual' visibility of the  column is fully controlled by user, pre-Wildfire 6 behavior.",
      "values": "automatic, manual",
      "default": "automatic"
    },
    {
      "category": "Without category",
      "name": "simprep_column_format",
      "description": "Specifies simplified representation model tree column format.",
      "values": "names only, icons only, icons and names",
      "default": "icons and names"
    },
    {
      "category": "Without category",
      "name": "simprep_default_cnfg_asm",
      "description": "Retrieves a CSA model in a specified representation. Yes - uses Open Rep dialog. No - retrieves the Master representation. Specified Name - retrieves the model in the specified representation name if it exists or the Default representation.",
      "values": "",
      "default": "last stored"
    },
    {
      "category": "Without category",
      "name": "simprep_ondemand_activation",
      "description": "Enables retrieving on-demand the Master rep of  an activated model. When an assembly is activated  the Assembly only rep is retrieved.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "simprep_ondemand_cleanup",
      "description": "Determines if a model retrieved on demand  should be removed or erased.  Disabled - the model will not be removed  and will remain in the assembly.  Removed - the model will be removed. Remove_Erase - The model will be removed  and erased from memory.",
      "values": "disable, restore, restore_and_erase",
      "default": "restore"
    },
    {
      "category": "Without category",
      "name": "simprep_ondemand_editing",
      "description": "Enables on demand retrieval of an edited item and its parent references.  Configuration tools (Family Tables, Relations, etc) will retrieve  required models accordingly.  Automatic - Retrieves the minimum rep required to perform the operation.",
      "values": "automatic, master, disable, master_with_ancestors",
      "default": "automatic"
    },
    {
      "category": "Without category",
      "name": "simprep_ondemand_regeneration",
      "description": "Enables on demand retrieval of required  models during regeneration.  Can affect regeneration performance.",
      "values": "automatic, master, disable",
      "default": "automatic"
    },
    {
      "category": "Without category",
      "name": "single_side_surf_color",
      "description": "Allow application of color to a single side of a surface.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "sketch_dim_background_color",
      "description": "Set dimension background color when working in Sketcher to contrast, global or manual. For manual use sketch_dim_background_color_rgb to define RGB value.",
      "values": "manual, contrast, global",
      "default": "global"
    },
    {
      "category": "Without category",
      "name": "sketch_dim_background_color_rgb",
      "description": "Set RGB value for dimension background when working in Sketcher.",
      "values": "",
      "default": "255 255 255"
    },
    {
      "category": "Without category",
      "name": "sketch_dim_background_trans",
      "description": "Set dimension background transparency when working in Sketcher. 100 is fully transparent.",
      "values": "",
      "default": "20"
    },
    {
      "category": "Without category",
      "name": "sketcher_curve_color_synch",
      "description": "Synchronize color assignment between sketched curves and their sketches.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "sketcher_pre_creo4_constraints",
      "description": "Yes - glyphs are used to highlight snapping and permanent constraints in PMA. No - icons and guides are used to highlight snapping and permanent constraints in PMA.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "sketcher_rel_accuracy",
      "description": "Enter a sketcher relative accuracy.",
      "values": "",
      "default": "1.000000"
    },
    {
      "category": "Without category",
      "name": "sketcher_strngthn_to_def_dec_pl",
      "description": "This option enable the user to keep a highly precise value during creation or convertion strong dimension.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "skip_relation_mfg_process_xml",
      "description": "Yes -The relation string of parameter will be stored along with the parameter value in Process XML No -The relation string of parameter will not be stored along with the parameter value in Process XML",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "snap_single_constraints",
      "description": "When dynamically dragging components during component placement, allow to snap to references one constraint at a time.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "spin_with_3d_datum_planes",
      "description": "Set to show or hide shaded (3D) datum planes during camera operations such as zoom, pan and rotate.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "spin_with_orientation_center",
      "description": "Display orientation center while reorienting.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "splash_screen_image_path",
      "description": "Path to custom splash screen image.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "style_state_transparency",
      "description": "Set the value of transparency for components set to \"Transparent\" in style state.  Value must be between 0 and 100.",
      "values": "",
      "default": "70"
    },
    {
      "category": "Without category",
      "name": "suppress_dim_ghost_with_ctrl",
      "description": "Suppress the ghost image of dimension when CTRL is pressed. It allows better visibility while selecting further dimension references.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "symbol_editor_use_symbol_font",
      "description": "Defines the type of symbols palette to use in the symbol editor. When set to yes, uses the type defined in the symbol_font Detail option for the current model or drawing. When set to no, uses the legacy palette.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "symbol_free_with_leader",
      "description": "Defines if the 'With Leader-Free Point' placement option is available in the shortcut menu when creating symbol in Drawing mode.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "symbol_repeat_mode",
      "description": "Activates the repeat symbol creation mode.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "template_cnfg_asm",
      "description": "Specifies the default configurable assembly template file.  Use full pathname to avoid problems.",
      "values": "",
      "default": "inlbs_csa_abs.asm"
    },
    {
      "category": "Without category",
      "name": "template_esrasm",
      "description": "Specifies the designated template ESR assembly. Use full path to avoid problems.",
      "values": "",
      "default": "inlbs_asm_esr_abs.asm"
    },
    {
      "category": "Without category",
      "name": "template_layout",
      "description": "Specifies the default layout template file.  Use full pathname to avoid problems.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "template_mfgadditive",
      "description": "Specify the model used as the default manufacturing mold template",
      "values": "",
      "default": "mmks_asm_print3d_design_abs.asm"
    },
    {
      "category": "Without category",
      "name": "text_height_factor",
      "description": "Set default text height factor.",
      "values": "",
      "default": "70.000000"
    },
    {
      "category": "Without category",
      "name": "tk_enable_ribbon_custom_save",
      "description": "Enable storing the Auxiliary Application User Interface customization",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "tk_pre_creo7_udf_body_autofill",
      "description": "When using Pro/TK to place a UDF created before Creo 7.0, automatically use the default body to fill the body reference.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "tool_mgr_save_pocket_in_xml",
      "description": "Determines whether the tool position should be saved in a XML file (*.txf) created in tool manager dialog.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "trail_gui_refresh_rate",
      "description": "The rate at which the GUI should refresh during trail file playback, measured in updates per minute.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "travel_bounds_display",
      "description": "Enable travel bounds display.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "travel_bounds_transparency",
      "description": "Transparency value for machine bound display.",
      "values": "",
      "default": "0.800000"
    },
    {
      "category": "Without category",
      "name": "trngrv_roundtool_nobackcut",
      "description": "Yes - Groove turning using round tool generates no back cut motion for profile pass.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "turn_output_cutcom_tm_apprexit",
      "description": "output proper cutter composition when approach and exit tool motions are defined for turning.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "upd_param_on_retr_mark_modified",
      "description": "Allows/disallows mark model as changed if as a result of mass properties/relations calculation during retrieval some parameter values are changed.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "use_gpu_line_style_rendering",
      "description": "If set to 'yes', line styles will be rendered by graphics card instead of CPU in current session.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "use_inverted_mousewheel_zoom",
      "description": "Invert the direction of mousewheel zooming in the graphics.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "use_master_for_bad_disp_reps",
      "description": "Yes to retrieve master rep when graphics rep has no display data.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "use_strict_ui_trail",
      "description": "Perform extra validation of user interface actions when playing back trail files.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "use_temp_interface_for_paste",
      "description": "Yes - Enables use of interfaces for multiple placement of components during paste.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "use_ttf_glyph_loop_orientation",
      "description": "Specify how you want the font rendering engine to correct the glyph loop orientation. Yes : Font glyphs are corrected after a quick check. No : All glyphs are corrected.",
      "values": "yes, no",
      "default": "yes"
    },
    {
      "category": "Without category",
      "name": "use_web_page_font_in_reports",
      "description": "Controls whether HTML reports use the browser's standard fonts.",
      "values": "yes, no",
      "default": "no"
    },
    {
      "category": "Without category",
      "name": "visible_recent_files",
      "description": "Number of visible recent files. The possible range is 1 - 30.",
      "values": "",
      "default": "21"
    },
    {
      "category": "Without category",
      "name": "web_enable_javascript",
      "description": "Enables or disables Pro/Web.Link in the embedded browser.",
      "values": "off, on",
      "default": "off"
    },
    {
      "category": "Without category",
      "name": "web_max_mail_size",
      "description": "Set the maximum email attachment size in kilobytes.",
      "values": "",
      "default": "5000.000000"
    },
    {
      "category": "Without category",
      "name": "weld_fillet_preferences_file",
      "description": "Sets the path and name of the fillet weld preferences file.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "weld_general_preferences_file",
      "description": "Sets the path and name of the general weld preferences file.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "weld_groove_preferences_file",
      "description": "Sets the path and name of the groove weld preferences file.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "weld_plug_slot_preferences_file",
      "description": "Sets the path and name of the plug/slot weld preferences file.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "weld_spot_preferences_file",
      "description": "Sets the path and name of the spot weld preferences file.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "wf_inch_solid_dtl_setup_file",
      "description": "Sets the path to the file which contains the default model detail option values for pre Creo inch models.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "wf_metric_solid_dtl_setup_file",
      "description": "Sets the path to the file which contains the default model detail option values for pre Creo metric models.",
      "values": "",
      "default": ""
    },
    {
      "category": "Without category",
      "name": "xmlelem_double_precision",
      "description": "Number of decimal places to use for a double value in a feature.",
      "values": "1, 3, 2, 4, 5, 6, 7, 8, 9",
      "default": ""
    }
   ]