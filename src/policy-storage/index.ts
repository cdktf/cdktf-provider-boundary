/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of days after which a session recording will be automatically deleted. Defaults to 0: never automatically delete. However, delete_after_days and retain_for_days cannot both be 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#delete_after_days PolicyStorage#delete_after_days}
  */
  readonly deleteAfterDays?: number;
  /**
  * Whether or not the associated delete_after_days value can be overridden by org scopes. Note: if the associated delete_after_days value is 0, overridable is ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#delete_after_overridable PolicyStorage#delete_after_overridable}
  */
  readonly deleteAfterOverridable?: boolean | cdktf.IResolvable;
  /**
  * The policy description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#description PolicyStorage#description}
  */
  readonly description?: string;
  /**
  * The policy name. Defaults to the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#name PolicyStorage#name}
  */
  readonly name?: string;
  /**
  * The number of days a session recording is required to be stored. Defaults to 0: allow deletions at any time. However, retain_for_days and delete_after_days cannot both be 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#retain_for_days PolicyStorage#retain_for_days}
  */
  readonly retainForDays?: number;
  /**
  * Whether or not the associated retain_for_days value can be overridden by org scopes. Note: if the associated retain_for_days value is 0, overridable is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#retain_for_overridable PolicyStorage#retain_for_overridable}
  */
  readonly retainForOverridable?: boolean | cdktf.IResolvable;
  /**
  * The scope for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#scope_id PolicyStorage#scope_id}
  */
  readonly scopeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage boundary_policy_storage}
*/
export class PolicyStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_policy_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyStorage to import
  * @param importFromId The id of the existing PolicyStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "boundary_policy_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.0/docs/resources/policy_storage boundary_policy_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyStorageConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_policy_storage',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.3.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteAfterDays = config.deleteAfterDays;
    this._deleteAfterOverridable = config.deleteAfterOverridable;
    this._description = config.description;
    this._name = config.name;
    this._retainForDays = config.retainForDays;
    this._retainForOverridable = config.retainForOverridable;
    this._scopeId = config.scopeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_after_days - computed: false, optional: true, required: false
  private _deleteAfterDays?: number; 
  public get deleteAfterDays() {
    return this.getNumberAttribute('delete_after_days');
  }
  public set deleteAfterDays(value: number) {
    this._deleteAfterDays = value;
  }
  public resetDeleteAfterDays() {
    this._deleteAfterDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterDaysInput() {
    return this._deleteAfterDays;
  }

  // delete_after_overridable - computed: false, optional: true, required: false
  private _deleteAfterOverridable?: boolean | cdktf.IResolvable; 
  public get deleteAfterOverridable() {
    return this.getBooleanAttribute('delete_after_overridable');
  }
  public set deleteAfterOverridable(value: boolean | cdktf.IResolvable) {
    this._deleteAfterOverridable = value;
  }
  public resetDeleteAfterOverridable() {
    this._deleteAfterOverridable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAfterOverridableInput() {
    return this._deleteAfterOverridable;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // retain_for_days - computed: false, optional: true, required: false
  private _retainForDays?: number; 
  public get retainForDays() {
    return this.getNumberAttribute('retain_for_days');
  }
  public set retainForDays(value: number) {
    this._retainForDays = value;
  }
  public resetRetainForDays() {
    this._retainForDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainForDaysInput() {
    return this._retainForDays;
  }

  // retain_for_overridable - computed: false, optional: true, required: false
  private _retainForOverridable?: boolean | cdktf.IResolvable; 
  public get retainForOverridable() {
    return this.getBooleanAttribute('retain_for_overridable');
  }
  public set retainForOverridable(value: boolean | cdktf.IResolvable) {
    this._retainForOverridable = value;
  }
  public resetRetainForOverridable() {
    this._retainForOverridable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainForOverridableInput() {
    return this._retainForOverridable;
  }

  // scope_id - computed: false, optional: false, required: true
  private _scopeId?: string; 
  public get scopeId() {
    return this.getStringAttribute('scope_id');
  }
  public set scopeId(value: string) {
    this._scopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_after_days: cdktf.numberToTerraform(this._deleteAfterDays),
      delete_after_overridable: cdktf.booleanToTerraform(this._deleteAfterOverridable),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      retain_for_days: cdktf.numberToTerraform(this._retainForDays),
      retain_for_overridable: cdktf.booleanToTerraform(this._retainForOverridable),
      scope_id: cdktf.stringToTerraform(this._scopeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_after_days: {
        value: cdktf.numberToHclTerraform(this._deleteAfterDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_after_overridable: {
        value: cdktf.booleanToHclTerraform(this._deleteAfterOverridable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_for_days: {
        value: cdktf.numberToHclTerraform(this._retainForDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retain_for_overridable: {
        value: cdktf.booleanToHclTerraform(this._retainForOverridable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope_id: {
        value: cdktf.stringToHclTerraform(this._scopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
