/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_static
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostStaticConfig extends cdktf.TerraformMetaArguments {
  /**
  * The static address of the host resource as `<IP>` (note: port assignment occurs in the target resource definition, do not add :port here) or a domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_static#address HostStatic#address}
  */
  readonly address?: string;
  /**
  * The host description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_static#description HostStatic#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_static#host_catalog_id HostStatic#host_catalog_id}
  */
  readonly hostCatalogId: string;
  /**
  * The host name. Defaults to the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_static#name HostStatic#name}
  */
  readonly name?: string;
  /**
  * The type of host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_static#type HostStatic#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_static boundary_host_static}
*/
export class HostStatic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "boundary_host_static";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostStatic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostStatic to import
  * @param importFromId The id of the existing HostStatic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_static#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostStatic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "boundary_host_static", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/boundary/1.3.1/docs/resources/host_static boundary_host_static} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostStaticConfig
  */
  public constructor(scope: Construct, id: string, config: HostStaticConfig) {
    super(scope, id, {
      terraformResourceType: 'boundary_host_static',
      terraformGeneratorMetadata: {
        providerName: 'boundary',
        providerVersion: '1.3.1',
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
    this._address = config.address;
    this._description = config.description;
    this._hostCatalogId = config.hostCatalogId;
    this._name = config.name;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // host_catalog_id - computed: false, optional: false, required: true
  private _hostCatalogId?: string; 
  public get hostCatalogId() {
    return this.getStringAttribute('host_catalog_id');
  }
  public set hostCatalogId(value: string) {
    this._hostCatalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostCatalogIdInput() {
    return this._hostCatalogId;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      description: cdktf.stringToTerraform(this._description),
      host_catalog_id: cdktf.stringToTerraform(this._hostCatalogId),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_catalog_id: {
        value: cdktf.stringToHclTerraform(this._hostCatalogId),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
